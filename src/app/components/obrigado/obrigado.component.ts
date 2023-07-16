import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obrigado',
  templateUrl: './obrigado.component.html',
  styleUrls: ['./obrigado.component.scss']
})
export class ObrigadoComponent {

  constructor(private router: Router) {}


  goTo(value: string){
    if(value === 'home'){
      this.router.navigate(['']);
    }
    if(value === 'projetos'){
      this.router.navigate(['/projetos']);
    }
    
  }
}
