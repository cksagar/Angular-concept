import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerReactiveWayComponent } from './customer-reactive-way.component';

describe('CustomerReactiveWayComponent', () => {
  let component: CustomerReactiveWayComponent;
  let fixture: ComponentFixture<CustomerReactiveWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerReactiveWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerReactiveWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
