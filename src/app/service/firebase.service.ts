import { Injectable } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { getAuth } from '@angular/fire/auth';
import { getFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app = initializeApp(environment.firebase);
  auth = getAuth(this.app);
  firestore = getFirestore(this.app);

  constructor() { }
}
