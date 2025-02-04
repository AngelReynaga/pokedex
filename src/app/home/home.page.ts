import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  listPokemon: any[]=[];
  info: any;
  constructor(private pokeService: PokeapiService) {}
  ngOnInit()
  {
    this.pokeService.getListPokemon().subscribe((data)=>{
      this.listPokemon=data.results;
    });
  }
  handleDetail(urlPokemon: any){
    this.pokeService.getDetail(urlPokemon).subscribe((data)=>{
      this.info=data;
      alert("Name: "+this.info.name+'\n'+"Number: "+this.info.order+'\n'+"Weight: "+this.info.weight+"kg"+'\n'+"Height: "+this.info.height+"m"+'\n');
  });
  }
  
}
