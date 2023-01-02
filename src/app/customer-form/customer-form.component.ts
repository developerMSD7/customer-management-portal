import { Component } from '@angular/core';
import { Customer } from '../customer-model/customer';
import { CustomerServiceService } from '../customer-service/customer-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent {
  constructor(private customerService: CustomerServiceService) {}
  file!: any;
  rawfile!: any;
  response!: Customer;
  pVal!: number;
  onSelectFile(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    this.rawfile = file;
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file = reader.result;
    };
  }

  getDataFromForm(data: any) {
    let form = new FormData();
    form.append('img', this.rawfile);
    form.append('name', data.name);
    form.append('image.profilePhoto', this.file);
    this.customerService.saveNewData(form).subscribe((response: Customer) => {
      this.response = response;
      if (response.id != null) {
        this.pVal = 100;
      }
      console.log(response);
    });
  }
}
