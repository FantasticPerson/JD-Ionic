import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'mod-edit',
  templateUrl: 'mod-edit.component.html',
  // styleUrls: ['./mod-edit.component.css']
})
export class ModEditComponent implements OnInit {

  public addClass:string = "withBorder white";

  @Input() public itemArr:Array<any>;
  constructor() { }

  @Input()
  public mode:string;

  @Output()
  public eventEmitter:EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  public getImgSrc(item):string{
    return item.imgSrc.substr(3);
  }

  public show(name):boolean{
    if(name == 'total'){
      return this.mode == "count";
    } else if(name == "btns") {
      return this.mode == "edit";
    }
  }

  public numberChange(event,item){
    this.eventEmitter.emit({type:'change',data:{number:event.data,item:item}});
  }

  public itemChooseClick($event,item):void{
    item.picked = !item.picked;
    console.log(item.picked);
    this.eventEmitter.emit({type:'chooseChange',data:{item:item}});
  }

  public getItemPickedClass(item):string{
    if(item.picked){
      return "icon_select selected"
    }
    return "icon_select notselected"
  }

  public getAllSelectedClass():string{
    for(let i = 0;i<this.itemArr.length;i++){
      if(!this.itemArr[i].picked){
        return "icon_select notselected"
      }
    }
   return "icon_select selected"
  }

  public clickSelectAll(){
    if(this.getAllSelectedClass() == "icon_select notselected"){
      this.eventEmitter.emit({type:'selectAll',data:{isSelectAll:true}});
    } else {
      this.eventEmitter.emit({type:'selectAll',data:{isSelectAll:false}});
    }
  }

  public getTotalPrice(){
    let price = 0;
    for(var i=0;i<this.itemArr.length;i++){
      if(this.itemArr[i].picked){
        price += Number((this.itemArr[i].price * this.itemArr[i].number).toFixed(2))
      }
    }
    return price;
  }

  public delete():void{
    let toDeleteArr = [];
    for(let i=0;i<this.itemArr.length;i++){
      if(this.itemArr[i].picked){
        toDeleteArr.push(this.itemArr[i]);
      }
    }
    console.log( toDeleteArr);
    this.eventEmitter.emit({type:'delete',data:{delArr:toDeleteArr}});
  }

  public getModNumber():number{
    let number = 0;
    for(var i=0;i<this.itemArr.length;i++){
      if(this.itemArr[i].picked){
        number+= this.itemArr[i].number;
      }
    }
    return number;
  }

}
