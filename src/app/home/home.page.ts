import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

type Donut = {
  imgUrl?: string,
  name?: string,
  price?: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  donuts: any;

  sub: Subscription = new Subscription;

  constructor(
    private dataService: DataService,
    private router: Router,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getData() {
    this.sub = this.dataService.getDonuts().subscribe((donutRes) => {
      this.donuts = donutRes;
    })
  }

  async logOut() {
    const alert = this.alertCtrl.create({
      header: 'Do you want to logout?',
      buttons: [{
        text: 'Yes',
        handler: () => { this.router.navigateByUrl('/log-in'); }
      },
      {
        text: 'No'
      }]
    });
    (await alert).present();
  }

}