import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { AllDataService } from '../data/all-data.service';

register();

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {
  allpopularData: any[] = [];
  allcatData: any[] = [];
  alldrinkData: any[] = [];
  constructor(private menudata: AllDataService) { }

  ngOnInit()
  {
    this.allpopularData = this.menudata.getpopularData();
    this.allcatData = this.menudata.getcategorydata();
    this.alldrinkData = this.menudata.getdrinkdata();
  }

}
