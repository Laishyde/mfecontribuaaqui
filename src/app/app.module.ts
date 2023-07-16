import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './modules/landing-page/views/landing-page.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ProjetoComponent } from './components/projeto/projeto.component';
import { SharedModule } from './shared/shared.module';
import { ObrigadoComponent } from './components/obrigado/obrigado.component';
import { MeuProjetoComponent } from './components/meu-projeto/meu-projeto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    ProjetosComponent,
    ProjetoComponent,
    ObrigadoComponent,
    MeuProjetoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
