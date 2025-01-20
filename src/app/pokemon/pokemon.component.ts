import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../pokeTypes/pokeTypes.component';
import { KeyValuePipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  imports: [ NgFor, NgIf, NgStyle, NgClass , KeyValuePipe
  ],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;  
  isShiny: boolean = false;
  stats: { name: string; value: number }[] = [];
  maxStat: number = 255;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPokemonDetails(id);
    }
  }  

  // async loadPokemonDetails(id: string) {
  //   try {
  //     const pokemons = await this.pokemonService.fetchPokemonList(
  //       `https://tyradex.vercel.app/api/v1/pokemon/${id}`
  //     );
  //     console.log('Données récupérées :', pokemons);
  
  //     // Si l'API retourne un tableau avec un seul élément, on récupère le premier élément
  //     if (pokemons && pokemons.length > 0) {
  //       this.pokemon = pokemons[0];  // Récupérer le premier élément du tableau
  //     } else {
  //       console.error('Aucun Pokémon trouvé pour cet ID.');
  //     }
  
  //   } catch (error) {
  //     console.error('Erreur lors de la récupération des données :', error);
  //   }
  // }
  
  async loadPokemonDetails(id: string) {
    try {
      const pokemons = await this.pokemonService.fetchPokemonList(
        `https://tyradex.vercel.app/api/v1/pokemon/${id}`
      );
      console.log('Données récupérées :', pokemons);
  
      if (pokemons && pokemons.length > 0) {
        this.pokemon = pokemons[0]; // Récupération des données
      } else {
        console.error('Aucun Pokémon trouvé pour cet ID.');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  }

  toggleShiny() {
    this.isShiny = !this.isShiny;
  }

  colorType(type:string) :any {
    switch (type) {
      case 'Poison': 
        return '#8F41CB';
        break;
        case 'Plante': 
        return '#3FA129';
        break;
        case 'Acier': 
        return '#60A1B8';
        break;
        case 'Feu': 
        return '#E62829';
        break;
        case 'Combat': 
        return '#FF8000';
        break;
        case 'Dragon': 
        return '#5061E1';
        break;
        case 'Eau': 
        return '#2980EF';
        break;
        case 'Fée': 
        return '#EF71EF';
        break;
        case 'Glace': 
        return '#3FD8FF';
        break;
        case 'Insecte': 
        return '#91A119';
        break;
        case 'Normal': 
        return '#9FA19F';
        break;
        case 'Psy': 
        return '#EF4179';
        break;
        case 'Roche': 
        return '#AFA981';
        break;
        case 'Sol': 
        return '#915121';
        break;
        case 'Spectre': 
        return '#704170';
        break;
        case 'Ténèbres': 
        return '#3FA129';
        break;
        case 'Vol': 
        return '#81B9EF';
        break;
        case 'Électrik': 
        return '#FAC000';
        break;
    }
  }
}
