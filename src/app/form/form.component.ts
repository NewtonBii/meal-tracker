import { Component} from '@angular/core';
import {Food} from '../food';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  list="Your Foods";
  foods=[];

newFood:Food={
  name:'',
  calories:0,
  description:''
}

onSubmit() {
  if (this.newFood) {
    console.log(this.newFood);
  }
}

}
