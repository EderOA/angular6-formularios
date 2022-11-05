import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { ErrorPageComponent } from './error-page/error-page.component';




@NgModule({
  declarations: [
    SidemenuComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
