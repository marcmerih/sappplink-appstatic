import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnalyticsComponent } from './home-analytics.component';

describe('HomeAnalyticsComponent', () => {
  let component: HomeAnalyticsComponent;
  let fixture: ComponentFixture<HomeAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
