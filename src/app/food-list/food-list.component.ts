import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Food} from '../food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent{

  @Input() childFoodList:Food[];
  @Output() clickSender=new EventEmitter();

  @Output() removeclickSender = new EventEmitter();

  editButtonClicked(foodToEdit:Food){
    this.clickSender.emit(foodToEdit);
}

foodList=false;
 showFood(){
   this.foodList=true;
 }

 foodList1=false;
  showFood1(){
    this.foodList1=true;
  }

removeButtonClicked(foodToEdit:Food){
  this.removeclickSender.emit(foodToEdit);
}

}
