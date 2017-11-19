import { Component} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

display="Your List";

newFoods:Food[]=[
  new Food("Eggs","Nothing",300),
  new Food("Fish","Ugali",300),
  new Food("Rice","Matoke",300),
];

selectedFood=null;

submitted = false;

onSubmit(){this.submitted=true;}

newFood(){
  this.newFoods=[new Food("","",0)]
}
 finishedEditing(){
   this.selectedFood=null;
 }

 showDetails(food: Food) {
    this.selectedFood = food;
  }
  // addName(newName){
  //   this.newNames.unshift(newName);
  // }
  //
  // addDescription(newDescription){
  //   this.newDescriptions.unshift(newDescription);
  // }
  //
  // addCalories(newCalorie){
  //   this.newCalories.unshift(newCalorie);
  // }
}


export class Food {
constructor(
  public name:string,
  public descritption:string,
  public calories:number

){}


}
