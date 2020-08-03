import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-circle-detail',
  templateUrl: './circle-detail.component.html',
  styleUrls: ['./circle-detail.component.scss']
})
export class CircleDetailComponent implements OnInit {

  @Input() detail;
  constructor() { }

  ngOnInit() {
  }

}
