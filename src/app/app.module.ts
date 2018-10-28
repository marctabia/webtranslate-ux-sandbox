import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgGridModule } from 'angular2-grid';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MenuComponent } from './menu/menu.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgGridModule, MatButtonModule ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, EditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
