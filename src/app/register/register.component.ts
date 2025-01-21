import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports:[FormsModule,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  user: any = null;
  error: string | null = null;

  private auth: Auth = inject(Auth);

  constructor() {}

  signUp() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        this.user = userCredential.user;
        console.log('Utilisateur inscrit:', userCredential);
      })
      .catch((error) => {
        this.error = error.message;
        console.error('Erreur d\'inscription:', error);
      });
  }
}