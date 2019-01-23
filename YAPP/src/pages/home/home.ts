import { Component } from '@angular/core';
import {NavController, ModalController, NavParams} from 'ionic-angular';
import {ConfUtentePage} from "../conf-utente/conf-utente"
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modal: ModalController, private alertCtrl: AlertController) {

  }

  mostrarAlerta() {
    let alert = this.alertCtrl.create({
      title: '',
      message: 'Tem a certeza que pretende desassociar este utente à sua conta?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }
  abrirConfig(){

    console.log('ola');

    const confPage = this.modal.create(ConfUtentePage);
    confPage.present();

    //this.navCtrl.setRoot(ConfUtentePage);
  }
}
