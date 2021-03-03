import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft, faChartLine, faChartPie, faCheckCircle, faMarker, faPager, faSpinner, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  @Input() p: any ='';
  @Input() r: any ='';
  @Input() a: any ='';
  icon = faSpinner;
  icon2 = faCheckCircle;
  icon3 = faWindowClose;
  constructor() { }

  ngOnInit(): void {
  }

}
