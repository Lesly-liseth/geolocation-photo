import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyDQnuX_dVFiyFQoDB9Czv1ayjUY7Ova-5U",
      authDomain: "location-foto.firebaseapp.com",
      databaseURL: "https://location-foto-default-rtdb.firebaseio.com",
      projectId: "location-foto",
      storageBucket: "location-foto.appspot.com",
      messagingSenderId: "844774476070",
      appId: "1:844774476070:web:b3cdfc5e54bbb299ca99e7",
      measurementId: "G-M0J91PTC92"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
