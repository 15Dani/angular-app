import { NavComponent } from './components/template/nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreinarComponent } from './components/template/treinar/treinar.component';
import { CadastroCreateComponent } from './components/cadastro/cadastro-create/cadastro-create.component';
import { PularTreinoComponent } from './components/pular/pular-treino/pular-treino.component';


const routes: Routes = [

  { path: '', component: NavComponent },

  { path: 'treinar/:{id}', component: TreinarComponent },

  { path: 'cadastro/create', component: CadastroCreateComponent },

  { path: 'pular/treino', component: PularTreinoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
