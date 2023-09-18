import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './Pages/about/about.component';
import { AnuncioPageComponent } from './Pages/anuncio-page/anuncio-page.component';
import { AnuncioComponent } from './Pages/anuncio/anuncio.component';
import { CadClienteComponent } from './Pages/cad-cliente/cad-cliente.component';
import { ContaPessoalComponent } from './Pages/conta-pessoal/conta-pessoal.component';
import { CriarAnuncioComponent } from './Pages/criar-anuncio/criar-anuncio.component';
import { EmpresaComponent } from './Pages/empresa/empresa.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { ReservarComponent } from './Pages/reservar/reservar.component';
import { PopupComponent } from './popup/popup.component';
import { PopupService } from './services/popup.service';
import { ListaAnuncioComponent } from './Pages/lista-anuncio/lista-anuncio.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { PagamentoComponent } from './Pages/pagamento/pagamento.component';
import { DialogComponent } from './Pages/pagamento/dialog/dialog.component';
import { BolosComponent } from './Pages/bolos/bolos.component';
import { DecoraComponent } from './Pages/decora/decora.component';
import { PesquisaComponent } from './Pages/pesquisa/pesquisa.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AnuncioComponent,
    AnuncioPageComponent,
    AboutComponent,
    ListaAnuncioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeComponent,
    EmpresaComponent,
    CadClienteComponent,
    ContaPessoalComponent,
    ContaPessoalComponent,
    ReactiveFormsModule,
    LoginComponent,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReservarComponent,
    PopupComponent,
    FormsModule,
    CriarAnuncioComponent,
    PagamentoComponent,
    DialogComponent,
    PesquisaComponent,
    BolosComponent,
    DecoraComponent,

  ],
  providers: [[ProductService],[PopupService],{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
