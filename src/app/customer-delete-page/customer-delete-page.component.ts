import { Component } from '@angular/core';
import { CustomerServiceService } from '../customer-service/customer-service.service';

@Component({
  selector: 'app-customer-delete-page',
  templateUrl: './customer-delete-page.component.html',
  styleUrls: ['./customer-delete-page.component.css'],
})
export class CustomerDeletePageComponent {
  deleteResponse!: string;
  employeeId: any;
  constructor(private customerService: CustomerServiceService) {}
  deleteData(id: any) {
    this.customerService.deleteById(id.employeeId).subscribe((x: any) => {
      console.log(x);
      this.deleteResponse = x;
    });
  }
}
