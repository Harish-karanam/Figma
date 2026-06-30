import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-acknowledgement-popup',
  templateUrl: './acknowledgement-popup.html',
  styleUrls: ['./acknowledgement-popup.css']
})
export class AcknowledgementPopup {
  @Output() closePopup = new EventEmitter<void>();

  close() {
    this.closePopup.emit();
  }
}