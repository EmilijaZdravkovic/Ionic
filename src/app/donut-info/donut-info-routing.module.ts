import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonutInfoPage } from './donut-info.page';

const routes: Routes = [
  {
    path: '',
    component: DonutInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonutInfoPageRoutingModule {}
