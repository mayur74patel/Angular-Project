import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUploadRestaurantComponent } from './admin-upload-restaurant.component';

describe('AdminUploadRestaurantComponent', () => {
  let component: AdminUploadRestaurantComponent;
  let fixture: ComponentFixture<AdminUploadRestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUploadRestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
