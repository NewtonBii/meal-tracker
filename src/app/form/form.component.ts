import { Component} from '@angular/core';
import {Food} from '../food';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

display="Your List";

masterNewFoods:Food[]=[

  new Food("Eggs","Nothing",300),
  new Food("Fish","Ugali",300),
  new Food("Rice","Matoke",300),
];
selectedFood=null;

submitted = false;

onSubmit(){this.submitted=true;}

newFood(){
  this.masterNewFoods=[new Food("","",0)]
}
 finishedEditing(){
   this.selectedFood=null;
 }

 showDetails(food: Food) {
    this.selectedFood = food;
  }


}
