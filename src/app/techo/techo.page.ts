import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-techo',
  templateUrl: './techo.page.html',
  styleUrls: ['./techo.page.scss'],
})
export class TechoPage implements OnInit {

  techo_state: boolean;
  techo: string;

  constructor(public database: AngularFireDatabase) { 
    this.leerTecho();
  }

  ngOnInit() {
  }

  leerTecho () {
    const path = 'Jardin/techo';
    this.database.object<boolean>(path).valueChanges().subscribe( res => {
      if( res != undefined) {
        this.techo_state = res;
      }
    });
  }
  
  toggleChangePrender(ev: any) {
    const path = 'Jardin/techo';
    if(ev.detail.checked) {
      this.database.object(path).set(1);
      this.techo = "Abierto";
    }else{
      this.database.object(path).set(0);
      this.techo = "Cerrado";
    }
  }
}


