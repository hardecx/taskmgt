import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinetableComponent } from './timelinetable.component';

describe('TimelinetableComponent', () => {
  let component: TimelinetableComponent;
  let fixture: ComponentFixture<TimelinetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinetableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
