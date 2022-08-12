import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor() { }

  heroes: string[] = ['Hulk', 'Spiderman', 'Batman', 'Thor']
  
  heroeBorrado:string = ''

  borrarHeroe(){
    //console.log('borrando...')
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado)
  }

}
