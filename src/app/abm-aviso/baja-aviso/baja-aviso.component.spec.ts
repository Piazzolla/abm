import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaAvisoComponent } from './baja-aviso.component';

describe('BajaAvisoComponent', () => {
  let component: BajaAvisoComponent;
  let fixture: ComponentFixture<BajaAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BajaAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
