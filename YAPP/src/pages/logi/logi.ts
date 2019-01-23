import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {RegistoPage} from "../registo/registo"
import {ListPage} from "../list/list";
 /**
 * Generated class for the LogiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-logi',
  templateUrl: 'logi.html',
})
export class LogiPage {
  telemovel : number;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  login (){
    //fazer autenticação
    this.navCtrl.setRoot(ListPage);
  }

  registo(){
    this.navCtrl.push(RegistoPage);
  }

}
