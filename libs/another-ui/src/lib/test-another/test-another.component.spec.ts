import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAnotherComponent } from './test-another.component';

describe('TestAnotherComponent', () => {
  let component: TestAnotherComponent;
  let fixture: ComponentFixture<TestAnotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestAnotherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAnotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
