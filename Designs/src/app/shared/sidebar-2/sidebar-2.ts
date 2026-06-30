import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-2',
  standalone: false,
  templateUrl: './sidebar-2.html',
  styleUrl: './sidebar-2.css',
})


export class Sidebar2 {
  showPopup = false;

openPopup() {
  this.showPopup = true;
}

closePopup() {
  this.showPopup = false;
}
}
