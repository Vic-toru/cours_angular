import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthGuardService } from '../../services/auth-guard.service';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
// export class NavigationComponent {

//   user: any = null; // Par défaut, l'utilisateur est null

//   constructor(private router: Router, private authService: AuthGuardService) {}

//   ngOnInit(): void {
//     // On s'abonne à l'observable user$ pour suivre les changements d'état de l'utilisateur
//     this.authService.user$.subscribe(user => {
//       this.user = user; // Mettez à jour la variable `user` avec la dernière valeur de l'observable
//     });
//   }

//   signOut(): void {
//     this.authService.logout(); // Déconnexion de l'utilisateur
//     localStorage.removeItem('userToken'); // retirer le token du localstorage
//     this.router.navigate(['/login']); // Redirige vers la page de connexion après déconnexion
//   }
// }
export class NavigationComponent {
  currentUser: string | null = null;

  constructor(private auth: Auth) {
    // Vérifier si un utilisateur est connecté
    this.auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);

        this.currentUser = user.email; // Ou utilisez `user.displayName` si disponible
      } else {
        this.currentUser = null;
      }
    });
  }

  async logOut(): Promise<void> {
    // console.log(this.currentUser);
    try {
      await signOut(this.auth);
      console.log('Utilisateur déconnecté avec succès.');
      this.currentUser = null; // Réinitialiser l'état utilisateur
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }
}