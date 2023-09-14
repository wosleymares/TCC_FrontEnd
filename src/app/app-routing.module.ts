import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Pages/about/about.component';
import { AnuncioPageComponent } from './Pages/anuncio-page/anuncio-page.component';
import { AnuncioComponent } from './Pages/anuncio/anuncio.component';
import { CriarAnuncioComponent } from './Pages/criar-anuncio/criar-anuncio.component';
import { EmpresaComponent } from './Pages/empresa/empresa.component';
import { authGuard } from './services/guards/auth.guard';
import { ReservarComponent } from './Pages/reservar/reservar.component';

const routes: Routes = [

      { path: 'anuncio', component: AnuncioComponent},

      { path: 'empresa', component: EmpresaComponent},

      { path: 'about', component: AboutComponent},

      { path: 'anuncio-page', component: AnuncioPageComponent},

      { path: 'reservar', component: ReservarComponent},

      { path: 'criar-anuncio', component: CriarAnuncioComponent, canActivate:[authGuard]},

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
