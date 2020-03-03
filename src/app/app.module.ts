import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CamelCase } from './Pipes/UpperCase/CamelCase.pipe';
import { FilterPipe } from './Pipes/filter/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CamelCase,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
