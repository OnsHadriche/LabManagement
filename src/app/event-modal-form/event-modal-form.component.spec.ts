import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventModalFormComponent } from './event-modal-form.component';

describe('EventModalFormComponent', () => {
  let component: EventModalFormComponent;
  let fixture: ComponentFixture<EventModalFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventModalFormComponent]
    });
    fixture = TestBed.createComponent(EventModalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
