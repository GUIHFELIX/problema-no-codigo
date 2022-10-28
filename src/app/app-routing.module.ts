import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContatoComponent } from './views/contato/contato.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroCreateComponent } from './views/cadastro/cadastro-create/cadastro-create.component'; 
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { CadastroTabelaComponent } from './views/cadastro/cadastro-tabela/cadastro-tabela.component';
import { CadastroUpdateComponent } from './views/cadastro/cadastro-update/cadastro-update.component';
import { CadastroDeleteComponent } from './views/cadastro/cadastro-delete/cadastro-delete.component';
import { CadastroReadComponent } from './views/cadastro/cadastro-read/cadastro-read.component';
import { CadastroModel } from './views/cadastro/caadastro.model';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'contato',
    component: ContatoComponent

  },
  {
    path: 'cadastro',
    component: CadastroCreateComponent,
  },
  {
    path: 'cadastro/tabela',
    component: CadastroTabelaComponent,
  },
  
  {
    path: 'cadastro/update/:id',
    component: CadastroUpdateComponent,
  },
  {
    path: 'cadastro/delete/:id',
    component: CadastroDeleteComponent,
  },
  {
    path: 'cadastro/read/:id',
    component: CadastroReadComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
