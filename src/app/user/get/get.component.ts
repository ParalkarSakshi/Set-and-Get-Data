import { Component } from '@angular/core';
import { SetandgetServiceService } from 'src/app/setandget-service.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent {

  submittedData: any ;
  constructor(private getService: SetandgetServiceService){}

  ngOnInit() {
    this.getService.formData$.subscribe(Data => {
      this.submittedData = Data; 
    });
  }
}
