import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../shared/user.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe( user => (this.isLogged = user));
   }

  //login
  async onLogin (user:User) {
    return await this.afAuth.signInWithEmailAndPassword(
      user.email,
      user.password
      );
  }

    //Registro
    async onRegister (user:User){
      return await this.afAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
        );
  }
}

