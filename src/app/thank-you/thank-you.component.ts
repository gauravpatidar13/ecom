import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {
  constructor(private ss:SharedService) {
    localStorage.clear();
    this.ss.onCartCount(0);
    localStorage.setItem('carts',JSON.stringify([]));
   }

  ngOnInit(): void {
  }

}
