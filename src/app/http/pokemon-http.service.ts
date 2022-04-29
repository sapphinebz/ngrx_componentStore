import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../model/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonHttpService {
  constructor(private http: HttpClient) {}

  getPokemonByName(name: string) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
