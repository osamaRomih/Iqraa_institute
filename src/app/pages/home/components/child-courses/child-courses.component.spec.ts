import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCoursesComponent } from './child-courses.component';

describe('ChildCoursesComponent', () => {
  let component: ChildCoursesComponent;
  let fixture: ComponentFixture<ChildCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
