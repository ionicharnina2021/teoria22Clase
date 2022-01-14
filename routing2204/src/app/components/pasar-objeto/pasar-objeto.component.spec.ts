import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasarObjetoComponent } from './pasar-objeto.component';

describe('PasarObjetoComponent', () => {
  let component: PasarObjetoComponent;
  let fixture: ComponentFixture<PasarObjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasarObjetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasarObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
