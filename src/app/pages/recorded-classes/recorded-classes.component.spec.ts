import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedClassesComponent } from './recorded-classes.component';

describe('RecordedClassesComponent', () => {
  let component: RecordedClassesComponent;
  let fixture: ComponentFixture<RecordedClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordedClassesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordedClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
