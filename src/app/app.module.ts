import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormFieldTaskComponent } from './form-field-task/form-field-task.component';
import { TaskNameComponent } from './task-name/task-name.component';
import { FetchTaskService } from './fetch-task.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonControllerComponent } from './button-controller/button-controller.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldTaskComponent,
    TaskNameComponent,
    ButtonControllerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [FetchTaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
