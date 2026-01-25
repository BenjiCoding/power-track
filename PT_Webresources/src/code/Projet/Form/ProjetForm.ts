export class ProjetForm {
    private static readonly dateRangeNotificationId = "dateRangeValidation";
    static async onLoad(executionContext: Xrm.Events.EventContext): Promise<void> {
        const formContext = executionContext.getFormContext();

        const onDateChange = (): void => {
            ProjetForm.validateDateRange(formContext);
        };

        formContext.getAttribute(Pt_projet.Attributes.pt_datededebut)?.addOnChange(onDateChange);
        formContext.getAttribute(Pt_projet.Attributes.pt_datedefin)?.addOnChange(onDateChange);
        ProjetForm.validateDateRange(formContext);
    }

    private static validateDateRange(formContext: Xrm.FormContext): void {
        const startAttribute = formContext.getAttribute<Xrm.Attributes.Attribute>(Pt_projet.Attributes.pt_datededebut);
        const endAttribute = formContext.getAttribute<Xrm.Attributes.Attribute>(Pt_projet.Attributes.pt_datedefin);
        const startControl = formContext.getControl<Xrm.Controls.DateControl>(
            Pt_projet.Attributes.pt_datededebut
        );
        const endControl = formContext.getControl<Xrm.Controls.DateControl>(
            Pt_projet.Attributes.pt_datedefin
        );

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
}
