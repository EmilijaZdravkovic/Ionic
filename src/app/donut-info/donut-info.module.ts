import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonutInfoPageRoutingModule } from './donut-info-routing.module';

import { DonutInfoPage } from './donut-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonutInfoPageRoutingModule
  ],
  declarations: [DonutInfoPage]
})
export class DonutInfoPageModule {}
