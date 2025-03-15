import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut } from '@angular/fire/auth';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firebaseService: FirebaseService) {}

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.firebaseService.auth, provider);
  }

  logout() {
    return signOut(this.firebaseService.auth);
  }
}