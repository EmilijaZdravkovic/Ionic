import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { AlertController } from '@ionic/angular';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-donut',
  templateUrl: './add-new-donut.page.html',
  styleUrls: ['./add-new-donut.page.scss'],
})
export class AddNewDonutPage implements OnInit {

  alertButtons = ['Ok'];

  donutImage!: string;
  donutName!: string;
  donutPrice!: string;

  constructor(private dataService: DataService, private alertCtrl:AlertController, private router:Router) { }

  ngOnInit() {
  }

 async filledForm() {
    if(this.donutImage == null || this.donutName == null || this.donutPrice == null) {
      const warningAlert = this.alertCtrl.create({
        header: "Warning",
        subHeader: "Please fill in all fields",
        buttons: ['OK']
      });
      (await warningAlert).present();
    }else {
      this.addDonut();
      const alert = this.alertCtrl.create({
        header: "Added",
        subHeader: "Donut is succesfully added to list",
        buttons: [{
          text: 'OK',
          handler: () => {this.router.navigateByUrl('/home');}
        }]
      });
      (await alert).present();
    }
  }

  async addDonut() {
    await this.dataService.addDonut({
      imgUrl: this.donutImage,
      name: this.donutName,
      price: this.donutPrice
    })

  }

}
