import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from "@angular/router";
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    SidebarComponent,
    SearchBoxComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarComponent,
    SearchBoxComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
