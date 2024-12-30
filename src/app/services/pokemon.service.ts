import { Injectable } from '@angular/core';
import { Pokemon } from '../pokeTypes/pokeTypes.component';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  async fetchPokemonList(url: string): Promise<Pokemon[]> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Erreur: ${response.status}`);
      }
      const data = await response.json();
      
      // Retourner un tableau avec un seul Pokémon (si l'API retourne un objet unique)
      return Array.isArray(data) ? data : [data];  // Si c'est un objet, on le met dans un tableau
    } catch (error) {
      console.error('Erreur lors de la récupération des Pokémons :', error);
      throw error;
    }
  }
  
  
  

  constructor() {}
}
