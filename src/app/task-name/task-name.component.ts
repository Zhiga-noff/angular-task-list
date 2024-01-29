import {Component, Input} from '@angular/core';
import {UserInterface} from "../../interfaces/user-interface";

@Component({
  selector: 'app-task-name',
  templateUrl: './task-name.component.html',
  styleUrls: ['./task-name.component.scss']
})
export class TaskNameComponent {
  @Input('task') task:UserInterface | undefined


}
