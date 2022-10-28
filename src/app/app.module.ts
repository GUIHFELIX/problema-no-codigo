import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { HeadComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CadastroCreateComponent } from './views/cadastro/cadastro-create/cadastro-create.component';
import { CadastroReadComponent } from './views/cadastro/cadastro-read/cadastro-read.component';
import { CadastroUpdateComponent } from './views/cadastro/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './views/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroTabelaComponent } from './views/cadastro/cadastro-tabela/cadastro-tabela.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    HeadComponent,
    LoginComponent,
    FooterComponent,
    CadastroComponent,
    CadastroCreateComponent,
    CadastroReadComponent,
    CadastroUpdateComponent,
    CadastroDeleteComponent,
    CadastroTabelaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
