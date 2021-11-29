import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.page.html',
  styleUrls: ['./pokemon-view.page.scss'],
})
export class PokemonViewPage implements OnInit {
  pokemon: any;

  constructor(
    private pokemonService: PokemonsService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      const pokemon_id = data.get('pokemon_id');

      this.pokemonService.viewPokemon(pokemon_id).subscribe(response => {
        console.log(response);
        this.pokemon = response;
      }, error => {
        console.error(error);
      });
    });
  }

  getPictureUrl(img_url) {
    if(img_url.includes('http://') || img_url.includes('https://')){
      return img_url;
    }
    // return environment + '/' + img_url;
  }

}
