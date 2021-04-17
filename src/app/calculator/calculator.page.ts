import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage{
  constructor(public navCtrl: NavController,) {
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  ans=0;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  num1='';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  num2='';
  add()
  {
  // eslint-disable-next-line radix
  this.ans=parseInt(this.num1)+parseInt(this.num2);
  }
  // inputValue=(<HTMLInputElement>document.getElementById('#inp-num1')).value;
  sub()
  {
  // eslint-disable-next-line radix
  this.ans=parseInt(this.num1)-parseInt(this.num2);
  }
  //
  mul()
  {
  // eslint-disable-next-line radix
  this.ans=parseInt(this.num1)*parseInt(this.num2);
  }
  //
  div()
  {
  // eslint-disable-next-line radix
  this.ans=parseFloat(this.num1)/parseFloat(this.num2);
  }
  // ngOnInit() {
  // }
}
