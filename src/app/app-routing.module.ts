import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaAvisoComponent } from './abm-aviso/alta-aviso/alta-aviso.component'

const routes: Routes = [
	{ path: 'alta-aviso', component: AltaAvisoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
