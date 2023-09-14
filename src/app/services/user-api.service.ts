import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }

  salvarDados(data: any): Observable<any>{
    const url = 'http://localhost:8080/usuarios';
    return this.http.post(url,data);
  }
}
