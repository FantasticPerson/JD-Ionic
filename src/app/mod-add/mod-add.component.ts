import { Component, OnInit, Input, ViewChild,EventEmitter,Output } from '@angular/core';
import {NumberPickerComponent} from '../number-picker/number-picker.component'

@Component({
  selector: 'mod-add',
  templateUrl: 'mod-add.component.html',
  // styleUrls: ['./mod-add.component.css']
})
export class ModAddComponent implements OnInit {

  @ViewChild(NumberPickerComponent)
  private numberPickComponent:NumberPickerComponent;

  @Input() data:any;

  @Output()
  public eventEmmiter= new EventEmitter<any>();

  public addClass:string = "withBorder";
  public number:number = 1;
  
  
  constructor() { 
  }

  ngOnInit() {
  }

  public onSubmitClick(){
    let number = this.numberPickComponent.getNumber();
    this.data.number = number;
    this.data.picked = true;
    this.eventEmmiter.emit({type:'submit',data:this.data});
  }

  public onCloseClick(){
    this.eventEmmiter.emit({type:'close',data:{}})
  }

 
}
