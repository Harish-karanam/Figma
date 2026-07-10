import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SaveDraftPopupService } from '../../services/save-draft-popup';

@Component({
  selector: 'app-save-draft-popup',
  standalone: false,
  templateUrl: './save-draft-popup.html',
  styleUrl: './save-draft-popup.css'
})
export class SaveDraftPopup {

  visible$: Observable<boolean>;

  constructor(
    private popupService: SaveDraftPopupService
  ) {
    this.visible$ = this.popupService.visible$;
  }

  closePopup(): void {
    this.popupService.close();
  }
}