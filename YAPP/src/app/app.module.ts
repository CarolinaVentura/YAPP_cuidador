import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LogiPage} from '../pages/logi/logi'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {RegistoPage} from "../pages/registo/registo";
import {AssContasPage} from "../pages/ass-contas/ass-contas";
import {ConfUtentePage} from "../pages/conf-utente/conf-utente"
import {EditarPerfilPage} from "../pages/editar-perfil/editar-perfil";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
      LogiPage,
      RegistoPage,
      AssContasPage,
    ConfUtentePage,
    EditarPerfilPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, LogiPage, RegistoPage, AssContasPage, ConfUtentePage, EditarPerfilPage,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
