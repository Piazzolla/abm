import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaAvisoComponent } from './alta-aviso/alta-aviso.component';
import { BajaAvisoComponent } from './baja-aviso/baja-aviso.component';
import { ModAvisoComponent } from './mod-aviso/mod-aviso.component';

@NgModule({
  declarations: [AltaAvisoComponent, BajaAvisoComponent, ModAvisoComponent],
  imports: [
    CommonModule
  ]
})
export class AbmAvisoModule { }
