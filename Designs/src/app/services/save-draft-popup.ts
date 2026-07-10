import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveDraftPopupService {

  private visibleSubject = new BehaviorSubject<boolean>(false);

  visible$ = this.visibleSubject.asObservable();

  open(): void {
    this.visibleSubject.next(true);
  }

  close(): void {
    this.visibleSubject.next(false);
  }
}