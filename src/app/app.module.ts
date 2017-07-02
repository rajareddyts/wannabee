import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

///// Start FireStarter
import { environment } from '../environments/environment';
import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';


// FireStarter Users
import { AuthService } from './core/auth.service';
import { AuthGuard} from './core/auth.guard';
import { UserLoginComponent } from './components/users/user-login/user-login.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UserFormComponent } from './components/users/user-form/user-form.component';



// FireStarter Items
import { ItemService } from './components/items/shared/item.service';
import { ItemsListComponent } from './components/items/items-list/items-list.component';
import { ItemFormComponent } from './components/items/item-form/item-form.component';
import { ItemDetailComponent } from './components/items/item-detail/item-detail.component';

// FireStarter Uploads
import { UploadService } from './components/uploads/shared/upload.service';
import { UploadFormComponent } from './components/uploads/upload-form/upload-form.component';
import { UploadsListComponent } from './components/uploads/uploads-list/uploads-list.component';
import { UploadDetailComponent } from './components/uploads/upload-detail/upload-detail.component';

// FireStarter Navigation
import { NavService } from './components/shared/nav.service';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterNavComponent } from './components/footer-nav/footer-nav.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ReadmePageComponent } from './components/readme-page/readme-page.component';


export const firebaseConfig = environment.firebaseConfig;

///// End FireStarter


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserProfileComponent,
    ItemsListComponent,
    ItemFormComponent,
    ItemDetailComponent,
    UploadFormComponent,
    UploadsListComponent,
    UploadDetailComponent,
    TopNavComponent,
    FooterNavComponent,
    UserFormComponent,
    LoadingSpinnerComponent,
    ReadmePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    ItemService,
    UploadService,
    NavService,

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
