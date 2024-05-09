import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDonutPage } from './edit-donut.page';

const routes: Routes = [
  {
    path: '',
    component: EditDonutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDonutPageRoutingModule {}
