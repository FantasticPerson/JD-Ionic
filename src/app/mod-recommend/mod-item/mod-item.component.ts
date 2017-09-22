import { Component, OnInit, Input} from '@angular/core';
import {EventBusService} from '../../server/event-bus.service'

@Component({
  selector: 'mod-item',
  templateUrl: 'mod-item.component.html',
  // styleUrls: ['./mod-item.component.css']
})
export class ModItemComponent implements OnInit {

  @Input() describe:string;
  @Input() price:Number;
  @Input() imgSrc:string;
  @Input() weight:Number;
  @Input() choices:any;

  @Input() data2:any;

  constructor(public eventBusService:EventBusService) { }

  ngOnInit() {
  }

  onBuyClick(){
    this.eventBusService.eventBus.next({
      describe:this.describe,
      price:this.price,
      imgSrc:this.imgSrc,
      weight:this.weight,
      choices:this.choices
    })
  }
}
