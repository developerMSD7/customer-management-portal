import { Component } from '@angular/core';
import { CustomerServiceService } from '../customer-service/customer-service.service';

@Component({
  selector: 'app-customer-delete-page',
  templateUrl: './customer-delete-page.component.html',
  styleUrls: ['./customer-delete-page.component.css'],
})
export class CustomerDeletePageComponent {
  deleteResponse!: string;

  constructor(private customerService: CustomerServiceService) {}
  deleteData(response: any) {
    this.customerService.deleteById(response.employeeId).subscribe((x: any) => {
      console.log(x);
      this.deleteResponse = x;
    });
  }
}
