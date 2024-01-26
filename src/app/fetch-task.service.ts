import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FetchTaskService {

  constructor(private _http: HttpClient) { }

  get getTask() {
    return this._http.get('https://jsonplaceholder.typicode.com/todos/?_limit=30')
  }
}
