import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports:[FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  private auth: Auth = inject(Auth);

  constructor() {}

  signIn() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.user = userCredential.user;
        console.log('Utilisateur connecté:', userCredential);
        location.reload();
      })
      .catch((error) => {
        this.error = error.message;
        console.error('Erreur de connexion:', error);
      });
  }

  signOut(){
    this.auth.signOut();
  }
}