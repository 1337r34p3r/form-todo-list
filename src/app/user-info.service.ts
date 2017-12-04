import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpModule, JsonpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserInfoService {
  location= 'https://jsonblob.com/api/jsonBlob/90884c43-4460-11e7-ae4c-e1b255e8b1f9';
  constructor(public http: Http) { }
  userData: any;
  getData(): Observable<any>{
    this.userData= this.http
                  .get(this.location)
                  .map(response =>response.json());
    return this.userData;
  }
}