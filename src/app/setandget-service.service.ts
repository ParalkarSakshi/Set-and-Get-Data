import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SetandgetServiceService {
  
  private formData = new BehaviorSubject<any>(null);
  formData$ = this.formData.asObservable();
  
  setformData(data:any) {
    this.formData.next(data);
  }

  constructor() { }
}
