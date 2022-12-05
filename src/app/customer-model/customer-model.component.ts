import { Component } from '@angular/core';
import { CustomerServiceService } from '../customer-service/customer-service.service';

@Component({
  selector: 'app-customer-model',
  templateUrl: './customer-model.component.html',
  styleUrls: ['./customer-model.component.css'],
})
export class CustomerModelComponent {
  customerData: any;
  constructor(private cusomerService: CustomerServiceService) {
    cusomerService.getAllCustomerData().subscribe((incomingData) => {
      this.customerData = incomingData;
    });
  }
}
