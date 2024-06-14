import { Component } from '@angular/core';
import { Step, StepStatus } from 'src/app/model/stepper.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentStep: Step = { label: 'Role', status: StepStatus.ACTIVE };
  public steps: Step[] = [
    { label: 'Role', status: StepStatus.ACTIVE },
    { label: 'Email', status: StepStatus.DISABLED },
    { label: 'Settings', status: StepStatus.DISABLED }
  ];
}
