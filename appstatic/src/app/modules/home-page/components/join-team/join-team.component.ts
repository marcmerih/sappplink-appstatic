import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-join-team',
  templateUrl: './join-team.component.html',
  styleUrls: ['./join-team.component.scss']
})
export class JoinTeamComponent implements OnInit {
  private form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      state: ''
    });
  }

  ngOnInit(): void {
  }

  get isCountrySelected() {
      return this.form.get('country')?.value;
  }

  get formGroup() {
    return this.form;
  }

}
