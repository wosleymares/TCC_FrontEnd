import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {


  constructor(private http: HttpClient) { }

  salvarDados(data: any): Observable<any>{
    const url = 'http://localhost:8080/clientes';
    return this.http.post(url,data);
  }
}
