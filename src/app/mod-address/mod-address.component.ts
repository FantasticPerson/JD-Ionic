import { Component, OnInit, Input ,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'mod-address',
  templateUrl: 'mod-address.component.html',
  // styleUrls: ['./mod-address.component.css']
})
export class ModAddressComponent implements OnInit {

  constructor() { }

  @Input()
  public mode:string;

  @Output()
  public eventEmmiter:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  public getBtnStr():string{
    console.log(this.mode);
    return this.mode == "count" ? "编辑" : "完成";
  }

  public onBtnClick(){
    this.eventEmmiter.emit({type:'changeMode',data:{}});
  }
}
