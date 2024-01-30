import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FetchTaskService } from '../fetch-task.service';
import { UserInterface } from '../../interfaces/user-interface';

@Component({
  selector: 'app-form-field-task',
  templateUrl: './form-field-task.component.html',
  styleUrls: ['./form-field-task.component.scss'],
})
export class FormFieldTaskComponent {
  @Input() taskList: UserInterface[];
  @Output() taskListUpdate: EventEmitter<UserInterface[]> = new EventEmitter();
  @Output() searchValue: EventEmitter<string> = new EventEmitter();

  taskValue: string = '';
  newTask: UserInterface = { title: '', id: '' };
  searchFlag: boolean = false;

  constructor(private _fetchTaskService: FetchTaskService) {}

  SubmitTask() {
    if (this.searchFlag) {
      this.searchValue.emit(this.taskValue);
      return;
    }
    this.reformatValue(this.taskValue);
    this._fetchTaskService.addNewTask(this.newTask).subscribe();
    this.taskListUpdate.emit(this.taskList);
    this.taskValue = '';
  }

  onChangeInput(value: string | null = '') {
    this.taskValue = value;
  }

  reformatValue(value?: string) {
    this.taskValue = value.trim();
    const idTask = Math.floor(Math.random() * 100) + 1;
    this.newTask = {
      title: this.taskValue,
      id: `${idTask}`,
    };
    this.taskList.push(this.newTask);
  }

  closeSearch() {
    this.taskValue = '';
    this.searchFlag = false;
    this._fetchTaskService.getTask().subscribe((tasks) => {
      this.taskListUpdate.emit(tasks);
    });
  }
}
