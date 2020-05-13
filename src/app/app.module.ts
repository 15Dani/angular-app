import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './components/template/nav/nav.component';
import { Header2Component } from './components/template/header2/header2.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroService } from './shared/cadastro.service';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TreinarComponent } from './components/template/treinar/treinar.component';
import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { PularTreinoComponent } from './components/pular/pular-treino/pular-treino.component';

import { NgxAudioPlayerModule } from 'ngx-audio-player';



@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      NavComponent,
      Header2Component,
      TreinarComponent,
      CadastroCreateComponent,
      PularTreinoComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatSidenavModule,
      MatListModule,
      HttpClientModule,
      FormsModule,
      MatInputModule,
      MatCardModule,
      MatSnackBarModule,
      NgxAudioPlayerModule,

   ],
   providers: [
    CadastroService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
