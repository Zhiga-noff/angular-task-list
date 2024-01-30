import { Component, OnInit } from '@angular/core';
import { FetchTaskService } from './fetch-task.service';
import { UserInterface } from '../interfaces/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  taskList: UserInterface[] | undefined;
  isLoading: boolean = true;

  constructor(private _fetchTaskService: FetchTaskService) {}

  ngOnInit() {
    this.fetchTask();
  }

  fetchTask() {
    this._fetchTaskService.getTask().subscribe((tasks) => {
      this.taskList = tasks;
      this.isLoading = false;
    });
  }

  updateTaskList(event: UserInterface[]) {
    this.taskList = event;
  }

  searchInTaskList(event: string) {
    const arrayTemplate: UserInterface[] = [];
    this.taskList.forEach((task) => {
      const title = task.title.toLowerCase();
      if (title.includes(event.toLowerCase())) {
        arrayTemplate.push(task);
      }
    });

    this.taskList = arrayTemplate;
  }
}
