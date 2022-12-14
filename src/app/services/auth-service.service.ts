import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: IUsuario;

  get usuario() {
    return {...this._usuario}
  }

  constructor(private http: HttpClient) { }

  login( email: string, password: string): Observable<AuthResponse | boolean> {
    const url = `${this.baseUrl}/auth`;
    const body = {email, password};
    return this.http.post<AuthResponse>(url, body).pipe(
      tap( rsp => {
        if( rsp.ok ){
          this._usuario = {
            name: rsp.name!,
            uid: rsp.uid!,
          }
        }
      }),
      map( rsp => rsp.ok),
      catchError( ({error}) => of(error))
    );
  }
}
