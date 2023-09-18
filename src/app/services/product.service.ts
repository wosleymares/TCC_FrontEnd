import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Interfaces/models/anuncio.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:8080/anuncios';

  constructor(private http: HttpClient) {}

  salvarDados(data: any): Observable<any>{
    const url = 'http://localhost:8080/anuncios';
    return this.http.post(url,data);
  }

  getProducts(): Observable<Product[]> {
    const url = 'http://localhost:8080/anuncios';
    return this.http.get<Product[]>(`${this.url}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}`, product);
  }
}
