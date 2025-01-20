import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { RandomComponent } from './random/random.component';

@Component({
  selector: 'app-observable',
  imports: [ RandomComponent],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservablesComponent {
  private premiereSubscription: Subscription;
  laSource = interval(1000); // L'observable
  currentValue: number = 0; // Stocke la valeur courante

  constructor() {
    this.premiereSubscription = new Subscription(); // Initialisation ici
  }

  ngOnInit() {
    // Souscription à l'observable
    this.premiereSubscription = this.laSource.subscribe((count) => {
      this.currentValue = count;
      console.log(count); // Affiche dans la console
    });
  }

  ngOnDestroy() {
    // Résiliation de la souscription
    this.premiereSubscription.unsubscribe();
    console.log('Observable détruit');
  }

}