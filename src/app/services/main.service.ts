import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../shared/employee';

@Injectable({
  providedIn: 'root'
})
export class MainService {
private _url: string = "/assets/docs/employee.json" 
 constructor(private http: HttpClient){}

getEmployees(): Observable<IEmployee[]>{
  return this.http.get<IEmployee[]>(this._url);
}

}