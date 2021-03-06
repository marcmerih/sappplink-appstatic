import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FooterComponent } from './shared-components/footer/footer.component';
import { HomePageModule } from './modules/home-page/home-page.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CorporateModule } from './modules/corporate/corporate.module';
import { MatDialogModule } from '@angular/material/dialog';
import { LanguagePopupComponent } from './shared-components/language-popup/language-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LanguagePopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HomePageModule,
    ReactiveFormsModule,
    FormsModule,
    CorporateModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
