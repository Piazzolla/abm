import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAvisoComponent } from './alta-aviso.component';

describe('AltaAvisoComponent', () => {
  let component: AltaAvisoComponent;
  let fixture: ComponentFixture<AltaAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
