import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService {

  constructor(private db: AngularFireDatabase) { }

  getData() {
    return this.db.object('Jardin').valueChanges();
    // try {
      
    // } catch (error) {
    //   return JSON.stringify(error)
    // }
    
  }
}