import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDonutPageRoutingModule } from './edit-donut-routing.module';

import { EditDonutPage } from './edit-donut.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDonutPageRoutingModule
  ],
  declarations: [EditDonutPage]
})
export class EditDonutPageModule {}
