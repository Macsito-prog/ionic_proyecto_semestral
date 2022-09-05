import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.page.html',
  styleUrls: ['./ropa.page.scss'],
})
export class RopaPage  {

  constructor(private alertController: AlertController)   {   }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Compra',
      subHeader: 'Su compra ha sido realizada',
      message: '¡Muchas gracias!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}


