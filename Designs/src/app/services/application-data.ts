import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {

  private data: any = {
    addressInfo: {},
    ownershipInfo: {},
    dimensionInfo: {},
    managerInfo: {},
    additionalInfo: {}
  };

  setData(section: string, value: any) {
    this.data[section] = value;
  }

  getData() {
    return this.data;
  }
}