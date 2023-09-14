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




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CriarAnuncioComponent,
    AnuncioComponent,
    AnuncioPageComponent,
    AboutComponent,


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
    ReservarComponent
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
