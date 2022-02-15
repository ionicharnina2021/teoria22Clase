import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNoReactivoComponent } from './formulario-no-reactivo.component';

describe('FormularioNoReactivoComponent', () => {
  let component: FormularioNoReactivoComponent;
  let fixture: ComponentFixture<FormularioNoReactivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNoReactivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNoReactivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
