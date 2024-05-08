import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewDonutPage } from './add-new-donut.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewDonutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewDonutPageRoutingModule {}
