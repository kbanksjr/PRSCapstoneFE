import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';
import { Request } from '../request/request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
  baseurl:string="http://localhost:5000/api/requestlines"
  reqlines:Requestline[]=[];
  req!:Request;

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Requestline[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Requestline[]>
  }

  get(id:number): Observable<Requestline>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>
  }

  create(reql:Requestline): Observable<Requestline>{
    return this.http.post(`${this.baseurl}`, reql) as Observable<Requestline>
  }
  change(reql:Requestline): Observable<Requestline>{
    return this.http.put(`${this.baseurl}/${reql.id}`, reql) as Observable<Requestline>
  }
  remove(id:number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
  }
}
