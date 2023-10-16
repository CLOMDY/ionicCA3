import { Component, Input, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent  implements OnInit {
  @Input() alldata: any[] = [];
  constructor() { }

  ngOnInit() {}

}
