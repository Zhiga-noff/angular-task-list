import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserInterface } from '../../interfaces/user-interface';
import { FetchTaskService } from '../fetch-task.service';

@Component({
  selector: 'app-task-name',
  templateUrl: './task-name.component.html',
  styleUrls: ['./task-name.component.scss'],
})
export class TaskNameComponent {
  @Input('task') task: UserInterface | undefined;
  @Input() taskList: UserInterface[] | undefined;
  @Output() taskListUpdate: EventEmitter<UserInterface[]> = new EventEmitter();

  editFlag: boolean = false;

  constructor(private _fetchTaskService: FetchTaskService) {}

  delete() {
    this._fetchTaskService.deleteTask(this.task!.id).subscribe();
    const newTaskList = this.taskList!.filter(
      (taskFilter) => taskFilter.id !== this.task!.id,
    );
    this.taskListUpdate.emit(newTaskList);
  }

  edit() {
    if (this.editFlag) {
      this._fetchTaskService
        .editTask(this.task.id, this.task.title)
        .subscribe();
    }
    this.editFlag = !this.editFlag;
  }
}
