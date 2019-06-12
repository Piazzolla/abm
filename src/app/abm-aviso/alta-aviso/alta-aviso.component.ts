import { Component, OnInit } from '@angular/core';
import { Aviso } from '../aviso';

@Component({
  selector: 'app-alta-aviso',
  templateUrl: './alta-aviso.component.html',
  styleUrls: ['./alta-aviso.component.css']
})
export class AltaAvisoComponent implements OnInit {


  model = new Aviso("aviso1", "bla bla bla bla 1", "12-6-2019", "20-7-2019");
  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
