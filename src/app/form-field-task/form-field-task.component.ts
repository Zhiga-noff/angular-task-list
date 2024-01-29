import { Component } from '@angular/core';
import { FetchTaskService } from '../fetch-task.service';

@Component({
  selector: 'app-form-field-task',
  templateUrl: './form-field-task.component.html',
  styleUrls: ['./form-field-task.component.scss'],
})
export class FormFieldTaskComponent {
  taskValue: string = '';

  constructor(private _fetchTaskService: FetchTaskService) {}

  SubmitTask() {
    console.log(this.reformatValue(this.taskValue));
  }

  onChangeInput(value: string = '') {
    console.log('Введено: ' + value);
  }

  reformatValue(value: string | null) {
    if (!value) {
      return;
    }
    return value.trim();
  }
}
