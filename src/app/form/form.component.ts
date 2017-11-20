import { Component} from '@angular/core';
import {Food} from '../food';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

display="Your List";

masterFoodsList:Food[]=[
];

selectedFood=null;

submitted = false;

 finishedEditing(){
   this.selectedFood=null;
 }

 showDetails(food: Food) {
    this.selectedFood = food;
  }

  addNewFood(newFoodFromChild:Food){
    this.masterFoodsList.unshift(newFoodFromChild);
  }


}
