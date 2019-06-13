import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilAnimalPage } from './perfil-animal.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAnimalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilAnimalPage]
})
export class PerfilAnimalPageModule {}
