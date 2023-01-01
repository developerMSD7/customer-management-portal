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
  file: any;

  onSelectFile(event: any) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event);
    this.file = fileReader.result;
    console.log(this.file);
  }
  getDataFromForm(data: Customer) {
    let form = new FormData();
    form.append('name', data.name);
    form.append('image.profilePhoto', this.file);
    this.customerService.saveNewData(form).subscribe();
  }
}
