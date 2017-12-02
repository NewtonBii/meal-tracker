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

  removeFood(food:Food){
    for (var i=0; i<this.masterFoodsList.length;i++){
        this.masterFoodsList.splice(i,1);
    }

  }

  addNewFood(newFoodFromChild:Food){
    this.masterFoodsList.unshift(newFoodFromChild);
  }

// deleteFood(food:Food){
//   for(let i=0;i<this.masterFoodsList.length;i++){
//     if(this.masterFoodsList[i]==food){
//       this.masterFoodsList.splice(i,1);
//     }
//   }
// }

}
