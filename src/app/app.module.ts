import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormFieldTaskComponent } from './form-field-task/form-field-task.component';
import { TaskNameComponent } from './task-name/task-name.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldTaskComponent,
    TaskNameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
