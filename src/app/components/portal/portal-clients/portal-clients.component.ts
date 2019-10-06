import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'portal-clients',
  templateUrl: './portal-clients.component.html',
  styleUrls: ['./portal-clients.component.css']
})
export class PortalClientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  SaveChanges(): void {
    console.log('Saved...');
  }

}
