// Modules 3rd party
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
         MdToolbarModule, MdDialogModule, MdNativeDateModule, MaterialModule } from '@angular/material';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';



import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Modules
import { MessagesModule } from './components/messages/messages.module';
import { PipesModule } from './pipes/pipes.module';
import { BlocksModule } from './components/blocks/blocks.module';
import { AuthModule } from './components/auth/auth.module';
import { BackgroundsModule } from './components/backgrounds/backgrounds.module';
import { ProfileModule } from './components/profile/profile.module';
import { MiscModule } from './components/misc/misc.module';

// Shared
import {
  FooterComponent,
  HeaderComponent,
} from './components/shared';

// Main
import { AppComponent } from './app.component';
import { AppRoutingModule,
         // routingComponents
         } from './app.routing';

// Components
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { EmailMeComponent } from './components/email-me/email-me.component';
import { LocatemeComponent } from './components/locateme/locateme.component';

// Services
import {UserService,
  DataStorageService,
  AlertService,
  AuthGuardService,
  AuthService, ApiClientService} from './services';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    EmailMeComponent,
    LocatemeComponent
    // routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdInputModule,
    MdToolbarModule, MdDialogModule, MdNativeDateModule, MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    MessagesModule,
    PipesModule,
    BlocksModule,
    AuthModule,
    BackgroundsModule,
    ProfileModule,
    MiscModule,
    AngularFireModule.initializeApp(environment.firebase, 'app-root'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBS4HxTa_ddVU4hXnrezjidMVQPNx1i1P0",
      libraries: ["places"]
    }),
  ],
  providers: [
    UserService,
    DataStorageService,
    AlertService,
    AuthGuardService,
    AuthService,
    ApiClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
