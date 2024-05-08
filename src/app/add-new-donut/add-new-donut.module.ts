import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewDonutPageRoutingModule } from './add-new-donut-routing.module';

import { AddNewDonutPage } from './add-new-donut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewDonutPageRoutingModule
  ],
  declarations: [AddNewDonutPage]
})
export class AddNewDonutPageModule {}
