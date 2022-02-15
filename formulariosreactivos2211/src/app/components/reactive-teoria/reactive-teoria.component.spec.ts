import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTeoriaComponent } from './reactive-teoria.component';

describe('ReactiveTeoriaComponent', () => {
  let component: ReactiveTeoriaComponent;
  let fixture: ComponentFixture<ReactiveTeoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveTeoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
