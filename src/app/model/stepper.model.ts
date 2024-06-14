export interface Step {
    label: string;
    status: StepStatus;
}

export enum StepStatus {
    COMPLETED = 'completed',
    ACTIVE = 'active',
    DISABLED = 'disabled'
}

export type StepperDirection = 'horizontal' | 'vertical';
export type StepperColor = 'primary' | 'secondary';