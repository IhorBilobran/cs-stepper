import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Step, StepStatus, StepperColor, StepperDirection } from 'src/app/model/stepper.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent {
  @Input() steps: Step[] = [];
  @Input() currentStep: Step;
  @Input() direction?: StepperDirection = StepperDirection.HORIZONTAL;
  @Input() color?: StepperColor = 'primary';

  public stepStatusEnum = StepStatus;

  public next(): void {
    const currentStepIndex = this.steps.findIndex(step => step.status === StepStatus.ACTIVE);
    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex < this.steps.length) {
      this.steps[currentStepIndex].status = StepStatus.COMPLETED;
      this.steps[nextStepIndex].status = StepStatus.ACTIVE;

      this.currentStep = this.steps[nextStepIndex];
    }
  }
}
