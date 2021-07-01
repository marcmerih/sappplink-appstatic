import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-management-card',
  templateUrl: './management-card.component.html',
  styleUrls: ['./management-card.component.scss']
})
export class ManagementCardComponent implements OnInit {
  @Input() image: string | undefined;
  @Input() name: string | undefined;
  @Input() subtitle: string | undefined;
  @Input() content: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
