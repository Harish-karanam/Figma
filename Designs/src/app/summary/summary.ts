import { Component, OnInit } from '@angular/core';
import { ApplicationDataService } from '../services/application-data';

@Component({
  selector: 'app-summary',
  standalone: false,
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary implements OnInit {

  data: any;

  constructor(private applicationDataService: ApplicationDataService) {}

  ngOnInit() {
    this.data = this.applicationDataService.getData();

    console.log(this.data);
  }
}