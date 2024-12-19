import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokeApi = 'https://tyradex.vercel.app/api/v1/gen/1';

  async fetchPokemonList(): Promise<any> {
    try {
      const response = await fetch(this.pokeApi);
      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la récupération des Pokémons :', error);
      throw error;
    }
  }

  constructor() {}
}