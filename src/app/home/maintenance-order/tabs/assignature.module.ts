import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AssignaturePage } from './assignature.page';
import { CustomComponentsModule } from 'src/app/utils/customComponents.module';

const routes: Routes = [
  {
    path: '',
    component: AssignaturePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AssignaturePage]
})
export class AssignaturePageModule {

  constructor(){

  }
}
