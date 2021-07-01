import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativesPageComponent } from './initiatives-page.component';

describe('InitiativesPageComponent', () => {
  let component: InitiativesPageComponent;
  let fixture: ComponentFixture<InitiativesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiativesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
