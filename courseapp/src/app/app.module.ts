import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './buy/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './buy/shopping-list-edit/shopping-list-edit.component';
import { ReceipeListComponent } from './cook/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './cook/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './cook/receipe-detail/receipe-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
