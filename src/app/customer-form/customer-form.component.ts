import { Component } from '@angular/core';
import { Customer } from '../customer-model/customer';
import { CustomerServiceService } from '../customer-service/customer-service.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent {
  constructor(private customerService: CustomerServiceService) {}
  file!: any;
  url = '';
  onSelectFile(event: any) {
    this.file = event.target.files[0];
  }

  getDataFromForm(data: Customer) {
   var x= new FileReader();
   x.readAsDataURL(this.file);
    let form = new FormData();

    form.append('image.profilePhoto', this.file);
    this.customerService.saveNewData(form).subscribe();
  }
}
