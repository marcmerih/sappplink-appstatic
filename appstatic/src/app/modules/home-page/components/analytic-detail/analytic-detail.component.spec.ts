import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticDetailComponent } from './analytic-detail.component';

describe('AnalyticDetailComponent', () => {
  let component: AnalyticDetailComponent;
  let fixture: ComponentFixture<AnalyticDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
