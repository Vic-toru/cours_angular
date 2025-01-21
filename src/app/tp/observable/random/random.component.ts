import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-random',
  imports: [NgFor , FormsModule , NgIf],
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css'] // Correction : 'styleUrl' → 'styleUrls'
})
export class RandomComponent {
  numbers: number[] = []; // Liste des nombres générés
  private subscription: Subscription | null = null; // Abonnement à l'observable
  paused = false; // État de la pause
  isDisplay:boolean = false;

  /**
   * Démarre le générateur de nombres aléatoires.
   * Crée un Observable qui émet un nombre aléatoire chaque seconde
   * et s'abonne à cet Observable pour ajouter les nombres générés à la liste.
   */
  start(): void {
    console.log('Démarrage du générateur de nombres aléatoires.');

    // Crée un Observable qui émet un nombre incrémental chaque seconde
    const randomNumbers$: Observable<number> = interval(1000);

    // S'abonner à l'Observable
    if (!this.subscription) {
      this.subscription = randomNumbers$.subscribe(() => {
        if (this.numbers.length >= 10) {
          this.numbers.shift();
        }
        const randomNum = Math.floor(Math.random() * 100) + 1; // Générer un nombre aléatoire
        console.log(`Nombre généré : ${randomNum}`);
        this.numbers.push(randomNum); 
      });
      console.log('Abonnement effectué.');
    }
  }

  /**
   * Met en pause ou reprend le générateur de nombres aléatoires.
   * Inverse l'état de la pause et gère l'abonnement en conséquence.
   */
  pauseResume(): void {
    this.paused = !this.paused; // Inverser l'état de la pause
    console.log(this.paused ? 'Générateur mis en pause.' : 'Générateur repris.');

    if (this.paused) {
      // Si en pause, désabonner
      this.stopSubscription();
    } else {
      // Si reprise, redémarrer
      this.start();
    }
  }

  /**
   * Arrête le générateur de nombres aléatoires.
   * Désabonne l'observable et réinitialise la liste des nombres générés.
   */
  stop(): void {
    console.log('Arrêt du générateur de nombres aléatoires.');
    this.stopSubscription();
    this.numbers = []; // Réinitialiser la liste
  }

  /**
   * Désabonne l'observable si un abonnement est actif.
   * Réinitialise la référence de l'abonnement à null après désabonnement.
   */
  private stopSubscription(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); 
      this.subscription = null; 
      console.log('Désabonnement effectué.');
    }
  }

  get filteredNumbers(): number[] {
    return this.isDisplay ? this.numbers.filter(num => num % 2 === 0) : this.numbers;
  }

}
