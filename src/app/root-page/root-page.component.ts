import { Component ,OnInit ,ViewChild} from '@angular/core';
import { EventBusService } from '../server/event-bus.service';
import {ModRecommendComponent} from '../mod-recommend/mod-recommend.component'

@Component({
  selector: 'app-root',
  templateUrl: 'root-page.component.html',
  // styleUrls: ['./app.component.css']
})
export class RootPageComponent {

  public toBuyList:Array<any>=[];
  public cModToBuy:any;
  public mode:string = "count";

  @ViewChild(ModRecommendComponent)
  private modComponent:ModRecommendComponent;
  
  constructor(public eventServiceBus:EventBusService){

  }

  ngOnInit(){
    this.eventServiceBus.eventBus.subscribe((value)=>{
      this.cModToBuy = value;
    })
  }

  ngAfterViewInit() {
    console.log()
  }



  public showModAddPanel(){
    return !!this.cModToBuy;
  }

  public eventFromModAdd(event){
    if(event.type == "close"){
      this.cModToBuy = null;
    } else if(event.type == 'submit'){
      this.toBuyList.push(this.cModToBuy);
      this.modComponent.onModAdded(this.cModToBuy);
      this.cModToBuy = null;
      this.modComponent
    }
  }

  public eventFromAddress(event):void{
    console.log(event);
    if(event.type == "changeMode"){
      if(this.mode == "count"){
        this.mode="edit";
      } else {
        this.mode = "count";
      }
    }
  }
  public showEdit():boolean{
    return this.toBuyList.length > 0;
  }

  public showUserCenter():boolean{
    return this.toBuyList.length <= 0;
  }

  public eventFromEdit(event):void{
    if(event.type=="change"){
      let i = -1;
      this.toBuyList.find((item,index)=>{
        if(item.imgSrc == event.data.item.imgSrc){
          i = index;
          return true;
        }
      })
      if(i >= 0){
        this.toBuyList[i].number = event.data.number;
      }
    } else if(event.type == "chooseChange"){
      let i = -1;
      this.toBuyList.find((item,index)=>{
        if(item.imgSrc == event.data.item.imgSrc){
          i = index;
          return true;
        }
      })
      this.toBuyList[i].picked = event.data.item.picked;
    } else if(event.type == 'selectAll'){
      let selected = event.data.isSelectAll;
      for(let i =0;i<this.toBuyList.length;i++){
        this.toBuyList[i].picked = selected;
      }
    } else if(event.type == "delete"){
      let delArr = event.data.delArr;
      for(let i = 0;i<delArr.length;i++){
        let i2 = -1;
        this.toBuyList.find((item,index)=>{
          if(item.imgSrc == delArr[i].imgSrc){
            i2 = index;
            return true;
          }
        })
        if(i2 >=0){
          this.toBuyList.splice(i2,1);
        }
      }
    }
  }
}
