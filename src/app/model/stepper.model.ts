export interface Step {
    label: string;
    status: StepStatus;
}

export enum StepStatus {
    COMPLETED = 'completed',
    ACTIVE = 'active',
    DISABLED = 'disabled'
}

export enum StepperDirection {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical'
}

export type StepperColor = 'primary' | 'secondary';