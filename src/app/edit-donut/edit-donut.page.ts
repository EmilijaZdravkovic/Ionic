import { Component, Input, OnInit } from '@angular/core';
import { Donut, DataService } from '../service/data.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-donut',
  templateUrl: './edit-donut.page.html',
  styleUrls: ['./edit-donut.page.scss'],
})
export class EditDonutPage implements OnInit {
  @Input() donut!: Donut;

  constructor(
    private dataService: DataService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public router: Router
  ) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  async editedDonut() {
    this.editDonut();
    const alert = this.alertCtrl.create({
      header: 'Edited',
      subHeader: 'Donut info is succesfully edited',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.dismiss();
          },
        },
      ],
    });
    (await alert).present();
  }

  async editDonut() {
    await this.dataService.editDonut({
      imgUrl: this.donut.imgUrl,
      name: this.donut.name,
      price: this.donut.price,
    });
  }
}
