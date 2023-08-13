import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FindComponent } from './components/find/find.component';
import { NewComponent } from './components/new/new.component';
import { UpdateComponent } from './components/update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from "@angular/material/icon";
import { LoadingComponent } from './components/loading/loading.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HttpManagerInterceptor} from "./components/interceptor/http-manager.interceptor";
import {enviroment} from "../enviroment/enviroment";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";


@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    DeleteComponent,
    FindComponent,
    NewComponent,
    UpdateComponent,
    LoadingComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        HttpClientModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        MatSnackBarModule,
        MatIconModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        AngularFireModule.initializeApp(enviroment.firebaseConfig),
        AngularFireStorageModule
    ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:HttpManagerInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
