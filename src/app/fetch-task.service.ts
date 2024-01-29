import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../interfaces/user-interface";

@Injectable({
  providedIn:'root'
})

export class FetchTaskService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos/?_limit=30'

  constructor(private _http: HttpClient) { }

  getTask(): Observable<UserInterface[]> {
    return this._http.get<UserInterface[]>(this.apiUrl)
  }
}
