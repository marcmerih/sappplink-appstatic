import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

fdescribe('NavigationService', () => {
  let service: NavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('RouteToDefault function', () => {
    it('should route to home page', () => {
      service.routeToDefault();
      expect(service.currentUrl).toBe('/home')
    });
  });
});
