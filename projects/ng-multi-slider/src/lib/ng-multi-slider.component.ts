import { Component, Input, OnInit } from '@angular/core';
import { ITime } from './models/time.model';
import { ITimeSplit } from './models/time-split.model';

@Component({
  selector: 'lib-ngMultiSlider',
  templateUrl: './ng-multi-slider.component.html', 
  styles: [
  ]
})
export class NgMultiSliderComponent implements OnInit {

  @Input() startTime: ITime;
  @Input() endTime: ITime;
  @Input() timeSplits: ITimeSplit;
  
  constructor() { }

  ngOnInit(): void {
  }

  initSlider = () => {

  }

}
