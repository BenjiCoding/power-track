/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { LinearInputBudgetExceeded, IBudgetExceededProps } from "./InputBudgetExceeded";
import * as React from "react";

export class InputBudgetExceeded implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;
    private budgetText = "";
    private budgetValue: number | null = null;

    /**
     * Empty constructor.
     */
    constructor() {
        // Empty
    }

    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     */
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     * @returns ReactElement root react element for the control
     */
    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        const contextBudget = context.parameters.budget.raw;
        const contextBudgetText = contextBudget == null ? "" : contextBudget.toString();
        const contextTotalHours = context.parameters.totalHours.raw ?? null;

        if (contextBudgetText !== this.budgetText || contextBudget !== this.budgetValue) {
            this.budgetText = contextBudgetText;
            this.budgetValue = contextBudget ?? null;
        }

        const props: IBudgetExceededProps = {
            budgetText: this.budgetText,
            budgetValue: this.budgetValue,
            totalHours: contextTotalHours,
            onBudgetChange: this.onBudgetChange
        };

        return React.createElement(LinearInputBudgetExceeded, props);
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as "bound" or "output"
     */
    public getOutputs(): IOutputs {
        return { budget: this.budgetValue ?? undefined };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }

    private onBudgetChange = (value: string): void => {
        this.budgetText = value;
        const trimmed = value.trim();
        if (trimmed.length === 0) {
            this.budgetValue = null;
        } else {
            const parsed = Number(trimmed);
            this.budgetValue = Number.isFinite(parsed) ? parsed : null;
        }

        this.notifyOutputChanged();
    };
}
