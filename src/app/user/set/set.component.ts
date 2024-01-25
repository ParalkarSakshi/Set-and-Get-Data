import { Component } from '@angular/core';
import { SetandgetServiceService } from 'src/app/setandget-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent {

    formData : any = {};

    constructor(private setService : SetandgetServiceService){}

    submitform() {
      Swal.fire({
        title:"Data Received",
        icon:'success'
      })

      this.setService.setformData(this.formData);
    }
}
