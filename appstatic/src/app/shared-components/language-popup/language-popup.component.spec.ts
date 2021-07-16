import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePopupComponent } from './language-popup.component';

describe('LanguagePopupComponent', () => {
  let component: LanguagePopupComponent;
  let fixture: ComponentFixture<LanguagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
