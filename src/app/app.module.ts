import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
// Routes
import { APP_ROUTING } from './app.routes';
// Services
import { HeroesService } from './services/heroes.service';
import { environment } from '../environments/environment';
import { FirestoreService } from './service/firestore/firestore.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { TestComponent } from './components/test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [HeroesService, AngularFirestore, FirestoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
