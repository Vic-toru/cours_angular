import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root' // Cela permet à Angular de gérer l'injection de dépendances
})
export class AuthGuardService{

  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);

  private userSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user') || '{}'));
  user$ = this.userSubject.asObservable(); // Observable pour suivre l'état de l'utilisateur

  canActivate(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          observer.next(true);  // Si l'utilisateur est authentifié, on autorise l'accès
        } else {
          observer.next(false); // Si l'utilisateur n'est pas authentifié, on redirige vers la page de login
          this.router.navigate(['/app-login']); // Redirection vers le login
        }
      });
    });
  }

  // Connexion de l'utilisateur (par exemple après un login)
  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.userSubject.next(user); // Met à jour le sujet avec les nouvelles données de l'utilisateur
  }

  // Déconnexion de l'utilisateur
  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null); // Met à jour l'état de l'utilisateur à null
  }

  // Récupérer les informations de l'utilisateur actuel
  getUser(): any {
    return this.userSubject.value; // Retourne l'utilisateur actuel
  }
}