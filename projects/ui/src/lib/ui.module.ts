import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [UiComponent, DropdownComponent],
  imports: [BrowserModule, RouterModule],
  exports: [UiComponent, DropdownComponent],
})
export class UiModule {}
