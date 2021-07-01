import { Injectable } from '@angular/core';
import * as AppConstants from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  public en = AppConstants.Languages.EN;
  public it = AppConstants.Languages.IT;
  public fr = AppConstants.Languages.FR;
  public tr = AppConstants.Languages.TR;

  constructor() { }
}
