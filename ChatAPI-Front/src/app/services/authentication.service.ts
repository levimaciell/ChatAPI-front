import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable, shareReplay } from 'rxjs';

interface Iuser{
  username: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  #httpClient = inject(HttpClient);
  #base_url = signal(environment.api_base_url);


  public createUser$(username:string, email:string, password: string): Observable<any>{
    return this.#httpClient.post<any>(`${this.#base_url()}/sign-up`,{
      username,
      email,
      password
    } ).pipe(shareReplay());
  } 
}
