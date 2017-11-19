import { Component, Output, EventEmitter} from '@angular/core';
import {Food} from '../food';

@Component({
  selector: 'app-new-food',
  templateUrl: './new-food.component.html',
  styleUrls: ['./new-food.component.css']
})
export class NewFoodComponent{
  @Output() newFoodSender=new EventEmitter();

addFood(name:string,description:string,calories:number){
  var newFoodToAdd:Food= new Food(name,description,calories);
  this.newFoodSender.emit(newFoodToAdd);
}


}
