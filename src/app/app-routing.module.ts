import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/landing-page/views/landing-page.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ProjetoComponent } from './components/projeto/projeto.component';
import { ObrigadoComponent } from './components/obrigado/obrigado.component';
import { MeuProjetoComponent } from './components/meu-projeto/meu-projeto.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent }, // www.exemplo.com.br/
  { path: 'projetos', component: ProjetosComponent },
  { path: 'projeto', component: ProjetoComponent },
  { path: 'obrigado', component: ObrigadoComponent },
  { path: 'meuprojeto', component: MeuProjetoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
