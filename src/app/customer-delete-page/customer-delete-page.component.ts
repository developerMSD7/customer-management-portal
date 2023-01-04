import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerServiceService } from '../customer-service/customer-service.service';

@Component({
  selector: 'app-customer-delete-page',
  templateUrl: './customer-delete-page.component.html',
  styleUrls: ['./customer-delete-page.component.css'],
})
export class CustomerDeletePageComponent {
  id!: any;
  deleteResponse!: string;

  deleteData(id: any) {
    this.id = id;
  }
  constructor(customerService: CustomerServiceService) {
    let formData = new FormData();
    formData.append('id',this.id)
    customerService.deleteById(this.id).subscribe((x) => {
      this.deleteResponse = x;
      console.log(x);
    });
  }
}
