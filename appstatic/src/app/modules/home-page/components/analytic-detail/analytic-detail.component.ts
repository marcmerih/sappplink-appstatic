import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analytic-detail',
  templateUrl: './analytic-detail.component.html',
  styleUrls: ['./analytic-detail.component.scss']
})
export class AnalyticDetailComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() icon: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
