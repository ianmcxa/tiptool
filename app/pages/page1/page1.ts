import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  tipAmount = "Tip:";
  totalAmount = "Total:";

  constructor(private navCtrl: NavController) {
  }

  calcTip(billInput: number) {
    let tip: number = Number(billInput) * .15;
    //round the tip to the nearest .01
    this.tipAmount = "Tip: $" + tip.toFixed(2);
    this.totalAmount = "Total: $" + (tip + Number(billInput)).toFixed(2);
  }
}
