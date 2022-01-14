import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasandoDosComponent } from './pasando-dos.component';

describe('PasandoDosComponent', () => {
  let component: PasandoDosComponent;
  let fixture: ComponentFixture<PasandoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasandoDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasandoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
