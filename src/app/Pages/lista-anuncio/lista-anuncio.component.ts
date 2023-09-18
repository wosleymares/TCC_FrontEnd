import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-anuncio',
  templateUrl: './lista-anuncio.component.html',
  styleUrls: ['./lista-anuncio.component.scss']
})
export class ListaAnuncioComponent implements OnInit {

  products: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/anuncios').subscribe((data: any) => {
      this.products = data; // Armazene os dados obtidos na variável products
    }, error => {
      console.error('Erro ao fazer a requisição do anúncio:', error);
    });
  }
}
