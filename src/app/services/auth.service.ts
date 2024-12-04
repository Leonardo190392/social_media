import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Login mit E-Mail und Passwort
  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Registrierung mit E-Mail und Passwort
  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Logout
  logout() {
    return this.afAuth.signOut();
  }

  // Aktuellen Benutzer abrufen
  getCurrentUser() {
    return this.afAuth.authState;
  }
}
