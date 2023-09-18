import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Pages/about/about.component';
import { AnuncioPageComponent } from './Pages/anuncio-page/anuncio-page.component';
import { AnuncioComponent } from './Pages/anuncio/anuncio.component';
import { CriarAnuncioComponent } from './Pages/criar-anuncio/criar-anuncio.component';
import { EmpresaComponent } from './Pages/empresa/empresa.component';
import { ListaAnuncioComponent } from './Pages/lista-anuncio/lista-anuncio.component';
import { authGuard } from './services/guards/auth.guard';
import { PagamentoComponent } from './Pages/pagamento/pagamento.component';
import { DialogComponent } from './Pages/pagamento/dialog/dialog.component';
import { PesquisaComponent } from './Pages/pesquisa/pesquisa.component';
import { DecoraComponent } from './Pages/decora/decora.component';
import { BolosComponent } from './Pages/bolos/bolos.component';
import { ReservarComponent } from './Pages/reservar/reservar.component';

const routes: Routes = [

      { path: 'anuncio', component: AnuncioComponent},

      { path: 'empresa', component: EmpresaComponent},

      { path: 'about', component: AboutComponent},

      { path: 'anuncio-page', component: AnuncioPageComponent},

      { path: 'lista-anuncios', component: ListaAnuncioComponent},

      { path: 'criar-anuncio', component: CriarAnuncioComponent, canActivate:[authGuard]},

      { path: 'pagamento', component: PagamentoComponent },

      { path: 'dialog', component: DialogComponent },

      { path: 'pesquisa', component: PesquisaComponent },

      { path: 'decora', component: DecoraComponent},

      { path: 'bolos', component: BolosComponent},

      { path: 'reservar', component: ReservarComponent,canActivate:[authGuard]},

      {
        path:'',
        loadComponent:() =>
        import('./Pages/home/home.component').then(x => x.HomeComponent),
      },

      {
        path:'login',
        loadComponent:() =>
        import('./Pages/login/login.component').then(x => x.LoginComponent),
      },


      {
        path:'cad-cliente',
        loadComponent:() =>
        import('./Pages/cad-cliente/cad-cliente.component').then(x => x.CadClienteComponent),
      },
      {
        path:'conta-pessoal',
        loadComponent:() =>
        import('./Pages/conta-pessoal/conta-pessoal.component').then(x => x.ContaPessoalComponent),
      },
      {
        path:'conta-empresa',
        loadComponent:() =>
        import('./Pages/conta-empresa/conta-empresa.component').then(x => x.ContaEmpresaComponent),
      },

      {
        path: 'home',
        loadComponent:() =>
        import('./Pages/home/home.component').then(x => x.HomeComponent),
      },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
