import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../Interfaces/models/anuncio.model';

@Component({
  selector: 'app-lista-anuncio',
  templateUrl: './lista-anuncio.component.html',
  styleUrls: ['./lista-anuncio.component.scss']
})
export class ListaAnuncioComponent implements OnInit {

  products: any[] = [];

  constructor(private http: HttpClient, private product: ProductService) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/anuncios').subscribe((data: any) => {
      this.products = data; // Armazene os dados obtidos na variável products
    }, error => {
      console.error('Erro ao fazer a requisição do anúncio', error);
    });


  }

  delete(){
    this.http.delete('http://localhost:8080').subscribe((data:any) =>{
      this.products = data;},
      error => {
        console.log("Erro ao excluir anúncio", error);
      });
  }

}
