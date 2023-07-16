import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-projeto',
  templateUrl: './meu-projeto.component.html',
  styleUrls: ['./meu-projeto.component.scss']
})
export class MeuProjetoComponent {

  
  exibirModal: boolean = false
  abrirModal(){
    this.exibirModal = true;
  }

  closeModal(){
    this.exibirModal = false;
  }
}
