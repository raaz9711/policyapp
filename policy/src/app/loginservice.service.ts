import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Loginaccess} from '../app/loginaccess';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  httplogin="http://127.0.0.1/php/angular-php-app/backend";

  finduser(): Observable<Loginaccess[]>{
    return this.httpclient.get<Loginaccess[]>(`${this.httplogin}/login/read.php`);
  }

  constructor(private httpclient:HttpClient) { }
}
