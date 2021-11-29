import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from 'src/app/_services/pokemons.service';

@Component({
  selector: 'app-pokemon-edit',
  templateUrl: './pokemon-edit.page.html',
  styleUrls: ['./pokemon-edit.page.scss'],
})
export class PokemonEditPage implements OnInit {
  pokemonForm: FormGroup;
  pokemon: any;
  pokemon_id: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonsService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.pokemonForm = this.formBuilder.group({
      nombre: [''],
      altura: [''],
      categoria: [''],
      peso: [''],
      habilidad: [''],
      tipo: [''],
      url_imagen: ['']
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.pokemon_id = data.get('pokemon_id');
      
      this.pokemonService.viewPokemon(this.pokemon_id).subscribe(response => {
        console.log(response);

        this.pokemon = response;
        this.pokemonForm.patchValue(response);
      }, error => {
        console.error(error);
      });
    });
  }

  savePokemon(n_pokemon: any){
    this.pokemonService.updatePokemon(this.pokemon_id, n_pokemon).subscribe(response => {
      console.log(response);
      this.router.navigate(['/pokemons']);
    }, error => {
      console.error(error);
    });
  }

}
