import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FoodListComponent } from './food-list/food-list.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { HighCaloriesComponent } from './high-calories/high-calories.component';
import { LowCaloriesComponent } from './low-calories/low-calories.component';
import { NewFoodComponent } from './new-food/new-food.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FoodListComponent,
    EditFoodComponent,
    HighCaloriesComponent,
    LowCaloriesComponent,
    NewFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
