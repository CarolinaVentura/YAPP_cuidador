import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AssContasPage} from "../ass-contas/ass-contas";


/**
 * Generated class for the RegistoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registo',
  templateUrl: 'registo.html',
})
export class RegistoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  registarDados() {

    //this.aFuth.auth.createUserWithEmail
    this.navCtrl.push(AssContasPage);
  }

}
