import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCustom02Component } from './reactive-custom02.component';

describe('ReactiveCustom02Component', () => {
  let component: ReactiveCustom02Component;
  let fixture: ComponentFixture<ReactiveCustom02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveCustom02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCustom02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
