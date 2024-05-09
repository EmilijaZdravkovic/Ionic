import { Component, Input, OnInit } from '@angular/core';
import { Donut, DataService } from '../service/data.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donut-info',
  templateUrl: './donut-info.page.html',
  styleUrls: ['./donut-info.page.scss'],
})
export class DonutInfoPage implements OnInit {
  @Input() donut!:Donut;

  constructor(
    private dataService: DataService, 
    private navCtrl: NavController,
    private router: Router
    ) { }

  ngOnInit() {
    this.donut = history.state.donut;
    console.log(this.donut);
  }

  goBack() {
    this.router.navigateByUrl('/home');
  }


}
