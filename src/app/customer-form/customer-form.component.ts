import { Component } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
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
    const file = event.target.files[0];
    this.url = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file = reader.result;
      console.log(reader.result);
    };
  }

  getDataFromForm(data: Customer) {
    let form = new FormData();
    form.append('name', data.name);
    form.append('image.profilePhoto', this.file);
    this.customerService.saveNewData(form).subscribe();
  }
}
