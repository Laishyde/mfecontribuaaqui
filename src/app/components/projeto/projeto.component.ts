import { Component } from '@angular/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent {

  exibirModal: boolean = false
  abrirModal(){
    this.exibirModal = true;
  }

  fecharModal() {
    this.exibirModal = false;
  }
}
