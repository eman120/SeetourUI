import { HttpClient } from '@angular/common/http';
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

declare var paypal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private ngZone: NgZone,
    private route: ActivatedRoute
  ) {
    this.amount = route.snapshot.params['amount'];
    this.bookedTourId=route.snapshot.params["bookedTourId"]
  }

  handler: any = null;
  amount: any;
  bookedTourId: any;

  ngOnInit() {
    this.loadStripe();
    this.route.params.subscribe((params) => {
      this.amount = params['amount'];
      this.bookedTourId = params['id'];
    });
  }

  pay(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: (token: any) => {
        //console.log(token);
        //console.log('Payment token:', token);
        //console.log('Amount:', amount);
        //console.log('Currency:', token.card.currency);
        //console.log('Card number:', token.card.last4);
        //console.log(
        //   'Expiration date:',
        //   token.card.exp_month + '/' + token.card.exp_year
        // );
        //console.log('CVC:', token.card.cvc);
        //console.log('Cardholder name:', token.card.name);
        //console.log('Date time:', new Date().toString());
        const paymentInfo = {
          bookedTourId:this.bookedTourId,
          amount:this.amount,
          currency: token.card.currency,
          cardNumber: token.card.last4,
          expDate: token.card.exp_month + '/' + token.card.exp_year,
          cardHolderName: token.card.name,
          dateTime: new Date().toISOString()  // format date as ISO string
        };

        this.http
          .post(
            `https://localhost:7277/api/Payment`,
            paymentInfo
          )
          .subscribe((response: any) => {
            //console.log('Payment saved to backend:', response);
          });
        this.ngZone.run(() => {
          this.router.navigate(['/payment-success']);
        });
      },
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * this.amount,
    });
  }

  loadStripe() {
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: (token: any) => {
            //console.log(token);
            alert('Payment Success!!');
            this.ngZone.run(() => {
              this.router.navigate(['/']);
            });
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }
}
