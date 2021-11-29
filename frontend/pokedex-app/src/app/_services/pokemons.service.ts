import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(
    private http: HttpClient
    ) { }


  viewPokemons(){
    return this.http.get<any>('http://localhost:3000/pokemons');
  }

  viewPokemon(id: any){
    return this.http.get<any>(`http://localhost:3000/pokemons/${id}`);
  }

  insertPokemon(pokemon: any){
    return this.http.post<any>('http://localhost:3000/pokemons', pokemon);
  }

  deletePokemon(id: any){
    return this.http.delete<any>(`http://localhost:3000/pokemons/${id}`);
  }

  updatePokemon(id: any, pokemon: any){
    return this.http.put<any>(`http://localhost:3000/pokemons/${id}`, pokemon);
  }

}
