import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'number-picker',
  templateUrl: 'number-picker.component.html',
  // styleUrls: ['./number-picker.component.css']
})
export class NumberPickerComponent implements OnInit {
  @Input() value = 12;
  @Input() className2:any="";
  @Input() number:number = 1;

  @Output()
  public eventEmitter:EventEmitter<any> = new EventEmitter<any>();


  
  constructor() { }

  ngOnInit() {
  }

  public getClassName():any{
    return "container "+this.className2;
  }

  public onAddClick():void{
    this.number++;

    this.eventEmitter.emit({type:'change',data:this.number});
  }

  public onMinusClick():void{
    if(this.number >1){
      this.number--;
      this.eventEmitter.emit({type:'change',data:this.number});
    }
  }

  public getNumber():number{
    return this.number;
  }

  

}
