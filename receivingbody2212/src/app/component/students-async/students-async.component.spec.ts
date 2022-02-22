import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAsyncComponent } from './students-async.component';

describe('StudentsAsyncComponent', () => {
  let component: StudentsAsyncComponent;
  let fixture: ComponentFixture<StudentsAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
