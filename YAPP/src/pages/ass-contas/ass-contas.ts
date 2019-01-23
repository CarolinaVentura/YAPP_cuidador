import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the AssContasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ass-contas',
  templateUrl: 'ass-contas.html',
})
export class AssContasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  terminarRegisto(){
    this.navCtrl.setRoot(HomePage);
  }

}
