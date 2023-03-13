import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { reverse } from 'dns';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mediciones: Mediciones[] = [];

  lastGrados: Mediciones;
  lastHumedad: Mediciones;
  lastLluvia: Mediciones;

  techo_state: boolean;

  constructor(public database: AngularFireDatabase) {
    this.leerMediciones();
    this.leerTecho();
   }

  ngOnInit() {

  }

  leerMediciones () {
    const path = 'Jardin/mediciones/';
    this.database.list<Mediciones>(path).valueChanges().subscribe( res => {
      console.log('mediciones -> ', res);
      this.mediciones = res;
      this.mediciones.reverse();
      this.lastGrados = this.mediciones[2];
      this.lastHumedad = this.mediciones[1];
      this.lastLluvia = this.mediciones[0];
    })
  }

  leerTecho () {
    const path = 'Jardin/techo';
    this.database.object<boolean>(path).valueChanges().subscribe( res => {
      if (res != undefined) {
        this.techo_state = res;
      }
    });
  } 
}


interface Mediciones {
  grados: number;
  lluvia: number;
  humedad: number;
}
