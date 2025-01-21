import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthGuardService } from '../../services/auth-guard.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  user: any = null; // Par défaut, l'utilisateur est null

  constructor(private router: Router, private authService: AuthGuardService) {}

  ngOnInit(): void {
    // On s'abonne à l'observable user$ pour suivre les changements d'état de l'utilisateur
    this.authService.user$.subscribe(user => {
      this.user = user; // Mettez à jour la variable `user` avec la dernière valeur de l'observable
    });
  }

  signOut(): void {
    this.authService.logout(); // Déconnexion de l'utilisateur
    this.router.navigate(['/login']); // Redirige vers la page de connexion après déconnexion
  }
}
