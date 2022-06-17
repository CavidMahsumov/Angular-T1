import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent,HeaderComponent,SearchComponent,CheckboxComponent,TableComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
