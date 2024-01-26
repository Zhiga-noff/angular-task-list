import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormFieldTaskComponent } from './form-field-task/form-field-task.component';
import { TaskNameComponent } from './task-name/task-name.component';
import {FetchTaskService} from "./fetch-task.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FormFieldTaskComponent,
    TaskNameComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [FetchTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
