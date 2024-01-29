import { Component, OnInit } from '@angular/core';
import { FetchTaskService } from './fetch-task.service';
import { UserInterface } from '../interfaces/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  taskList: UserInterface[] | [] = [];
  isLoading: boolean = true;

  constructor(private _fetchTaskService: FetchTaskService) {}

  ngOnInit() {
    this.fetchTask()
    if (!this.taskList) {
      return;
    }
    this.isLoading = false;
  }

  fetchTask() {
    this._fetchTaskService.getTask().subscribe(
      (tasks) => {
        this.taskList = tasks
      },
    );
  }
}
