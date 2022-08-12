import { Component } from '@angular/core';


//Argumentos que recibe el selector
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // contraparte de HTML
  styleUrls: ['./app.component.css'] //componente de CSS
})
export class AppComponent {
  titulo: string = 'Contador App';
  number: number = 10
  base:   number = 5

  acumular(valor:number){
    this.number += valor
  }
  
}
