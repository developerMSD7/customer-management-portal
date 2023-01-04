import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDeletePageComponent } from './customer-delete-page.component';

describe('CustomerDeletePageComponent', () => {
  let component: CustomerDeletePageComponent;
  let fixture: ComponentFixture<CustomerDeletePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDeletePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
