import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasarValorComponent } from './pasar-valor.component';

describe('PasarValorComponent', () => {
  let component: PasarValorComponent;
  let fixture: ComponentFixture<PasarValorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasarValorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasarValorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
