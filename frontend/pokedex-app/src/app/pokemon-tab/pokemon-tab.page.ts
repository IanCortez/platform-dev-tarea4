import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../_services/pokemons.service';

@Component({
  selector: 'app-pokemon-tab',
  templateUrl: './pokemon-tab.page.html',
  styleUrls: ['./pokemon-tab.page.scss'],
})
export class PokemonTabPage implements OnInit {

  pokemons: any = [];

  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
  }

  ionViewWillEnter(): void {
    this.pokemonsService.viewPokemons().subscribe(data => {
      console.log(data);
      this.pokemons = data;
    }, error => {
      console.error(error);
    });
  }

}
