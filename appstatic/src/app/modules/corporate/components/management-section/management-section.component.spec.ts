import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSectionComponent } from './management-section.component';

describe('ManagementSectionComponent', () => {
  let component: ManagementSectionComponent;
  let fixture: ComponentFixture<ManagementSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
