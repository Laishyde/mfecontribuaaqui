import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent {

  constructor(private router: Router) {}

  exibirModal: boolean = false
  abrirModal(){
    this.exibirModal = true;
  }

  fecharModal() {
    this.exibirModal = false;
    this.router.navigate(['/obrigado']);
  }
}
