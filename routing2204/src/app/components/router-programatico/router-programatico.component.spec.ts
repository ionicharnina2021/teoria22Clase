import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterProgramaticoComponent } from './router-programatico.component';

describe('RouterProgramaticoComponent', () => {
  let component: RouterProgramaticoComponent;
  let fixture: ComponentFixture<RouterProgramaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterProgramaticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterProgramaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
