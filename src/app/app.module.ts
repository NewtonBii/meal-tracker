import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FoodListComponent } from './food-list/food-list.component';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { NewFoodComponent } from './new-food/new-food.component';
import { FilterPipe } from './filter.pipe';
import { FilterHighPipe } from './filter-high.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FoodListComponent,
    EditFoodComponent,
    NewFoodComponent,
    FilterPipe,
    FilterHighPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
