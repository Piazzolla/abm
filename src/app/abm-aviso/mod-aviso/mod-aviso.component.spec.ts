import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAvisoComponent } from './mod-aviso.component';

describe('ModAvisoComponent', () => {
  let component: ModAvisoComponent;
  let fixture: ComponentFixture<ModAvisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModAvisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModAvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
