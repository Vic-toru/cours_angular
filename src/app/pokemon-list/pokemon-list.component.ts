import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { NgIf, NgFor } from '@angular/common';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-pokemon-list',
  imports: [NgIf, NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.loadPokemons();
  }

  async loadPokemons(): Promise<void> {
    try {
      const response = await this.pokemonService.fetchPokemonList();
      this.pokemons = response.map((pokemon: any) => ({
        id: pokemon.pokedex_id,
        name: pokemon.name.fr,
        image: pokemon.sprites.regular
      }));
    } catch (error) {
      this.errorMessage = 'Erreur lors du chargement des Pokémons';
    } finally {
      this.isLoading = false;
    }
  }
}