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
  reverseFlag: 'a > b' | 'b > a' | 'random' = 'random';

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

  revers() {
    switch (this.reverseFlag) {
      case 'a > b': {
        this.reverseFlag = 'b > a';
        this.taskList.reverse();
        this.taskListUpdate.emit(this.taskList);
        return;
      }
      default: {
        this.reverseFlag = 'a > b';
        this.taskList.sort((a: UserInterface, b: UserInterface) => {
          const titleA = a.title.toLowerCase();
          const titleB = b.title.toLowerCase();
          if (titleA > titleB) {
            return 1;
          } else if (titleA < titleB) {
            return -1;
          } else {
            return 0;
          }
        });
        this.taskListUpdate.emit(this.taskList);
      }
    }
  }
}
