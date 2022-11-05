import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path:  'reactive',
    loadChildren: ()=> import('./reactive/reactive.module').then( m  => m.ReactiveModule )
  },
  {
    path:  'template',
    loadChildren: ()=> import('./template/template.module').then( m  => m.TemplateModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },{
    path: '**',
    redirectTo: 'template'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }