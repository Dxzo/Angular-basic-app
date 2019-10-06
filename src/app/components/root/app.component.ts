import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

import { BnNgIdleService } from 'bn-ng-idle'; // import it to your component

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showLoadingIndicator: boolean = true;

  constructor(private _router: Router, private bnIdle: BnNgIdleService) {

    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) { this.showLoadingIndicator = true; }
      if (routerEvent instanceof NavigationEnd) this.showLoadingIndicator = false;
    });

    this.bnIdle.startWatching(300).subscribe((res) => {
      if (res) {
        console.log("session expired");
      }
    });

  }

  ngOnInit() {

  }

}
