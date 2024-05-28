import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BackGroundBlackDirective } from './back-ground-black.directive';
import { TodoStatePipe } from './todo-state.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BackGroundBlackDirective,
    TodoStatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
