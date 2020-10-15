import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  pageNotFoundTitle: string = '404';
  pageNotFoundText: string = 'We sorry, page you are looking for does not excist.';

  constructor() { }

  ngOnInit(): void {
  }

}
