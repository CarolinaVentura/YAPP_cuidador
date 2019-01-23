import { Component } from '@angular/core';
import {NavParams, ViewController, NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {HomePage} from "../home/home";


/**
 * Generated class for the ConfUtentePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-conf-utente',
  templateUrl: 'conf-utente.html',
})
export class ConfUtentePage {

  public isToggled: boolean;

  constructor(private navParams: NavParams, private view: ViewController, public alertCtrl: AlertController,public navCtrl: NavController,) {

  }


  fecharModal(){

    this.view.dismiss();
  }

   desConta(event){

     let confirm = this.alertCtrl.create({
       title: 'Tem a certeza que pretende desassociar esta conta?',

       buttons: [
         {
           text: 'Não',
           handler: () => {
             console.log('Disagree clicked');
           }
         },
         {
           text: 'Sim',
           handler: () => {
             console.log('Agree clicked');
             this.navCtrl.setRoot(HomePage);
           }
         }
       ]
     });
     confirm.present();
   }

  showAlert(event) {

    console.log("Toggled: "+ this.isToggled);

    if (this.isToggled == true) {



      let alert = this.alertCtrl.create();
      alert.setTitle('Tempo de inativade máxima');

      alert.addInput({
        type: 'number',
        placeholder: 'horas',
      });

      alert.addInput({
        type: 'number',
        placeholder: 'minutos',
      });


      alert.addButton('Cancelar');
      alert.addButton({
        text: 'Guardar',
        handler: data => {
          this.isToggled = true;

        }
      });
      alert.present();
    }

  }
}
