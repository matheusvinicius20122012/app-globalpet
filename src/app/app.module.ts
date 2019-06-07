import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//FireBase
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
     AngularFireModule.initializeApp(environment.firebaseConfig)
     , AngularFireDatabaseModule ],
  
  providers: [
    StatusBar,    
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
