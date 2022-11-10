import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl:string="http://localhost:5000/api/vendors"
  vends: Vendor[]=[];
  constructor(
    private http:HttpClient,
  ) { }


  list(): Observable<Vendor[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>
  }

  get(id:number): Observable<Vendor>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>
  }

  create(vend:Vendor): Observable<Vendor>{
    return this.http.post(`${this.baseurl}`, vend) as Observable<Vendor>
  }
  change(vend:Vendor): Observable<Vendor>{
    return this.http.put(`${this.baseurl}/${vend.id}`, vend) as Observable<Vendor>
  }
  remove(id:number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
  }

}
