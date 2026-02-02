import { GuidUtil } from "../../Util/GuidUtil";

export class ProjetForm {
    private static readonly dateRangeNotificationId = "dateRangeValidation";
    private static readonly missingHoursNotificationId = "missingAllocatedHours";
    static async onLoad(executionContext: Xrm.Events.EventContext): Promise<void> {
        const formContext = executionContext.getFormContext();

        const onDateChange = (): void => {
            ProjetForm.validateDateRange(formContext);
        };

        formContext.getAttribute(Pt_projet.Attributes.pt_datededebut)?.addOnChange(onDateChange);
        formContext.getAttribute(Pt_projet.Attributes.pt_datedefin)?.addOnChange(onDateChange);
        ProjetForm.validateDateRange(formContext);
        await ProjetForm.warnMissingAllocatedHours(formContext);
    }

    private static validateDateRange(formContext: Xrm.FormContext): void {
        const startAttribute = formContext.getAttribute<Xrm.Attributes.Attribute>(Pt_projet.Attributes.pt_datededebut);
        const endAttribute = formContext.getAttribute<Xrm.Attributes.Attribute>(Pt_projet.Attributes.pt_datedefin);
        const startControl = formContext.getControl<Xrm.Controls.DateControl>(Pt_projet.Attributes.pt_datededebut);
        const endControl = formContext.getControl<Xrm.Controls.DateControl>(Pt_projet.Attributes.pt_datedefin);

        startControl?.clearNotification(ProjetForm.dateRangeNotificationId);
        endControl?.clearNotification(ProjetForm.dateRangeNotificationId);

        const startDate = startAttribute?.getValue();
        const endDate = endAttribute?.getValue();

        if (!startDate || !endDate) {
            return;
        }

        if (endDate < startDate) {
            const message = "La date de fin doit être postérieure ou égale à la date de début.";
            startControl?.setNotification(message, ProjetForm.dateRangeNotificationId);
            endControl?.setNotification(message, ProjetForm.dateRangeNotificationId);
        }
    }

    private static async warnMissingAllocatedHours(formContext: Xrm.FormContext): Promise<void> {
        formContext.ui.clearFormNotification(ProjetForm.missingHoursNotificationId);

        const projectId = formContext.data.entity.getId();
        if (!projectId) {
            return;
        }

        const normalizedProjectId = GuidUtil.normalize(projectId);
        if (!normalizedProjectId) {
            return;
        }
        const filter = [
            `(_pt_projetid_value eq ${normalizedProjectId})`,
            `(${Pt_tache.Attributes.pt_heureallouee} eq null or ${Pt_tache.Attributes.pt_heureallouee} eq 0)`,
        ].join(" and ");

        try {
            const result = await Xrm.WebApi.retrieveMultipleRecords(
                "pt_tache",
                `?$select=${Pt_tache.Attributes.pt_tacheid}&$filter=${filter}`,
            );

            if (result.entities.length > 0) {
                formContext.ui.setFormNotification(
                    "Des tâches du projet n'ont pas d'heure allouee.",
                    "WARNING",
                    ProjetForm.missingHoursNotificationId,
                );
            }
        } catch (error) {
            console.error("ProjetForm.warnMissingAllocatedHours failed", error);
        }
    }
}
