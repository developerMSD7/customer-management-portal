import { Component, Renderer2 } from '@angular/core';
import { CustomerServiceService } from '../customer-service/customer-service.service';
import { Customer } from './customer';
import { Image } from './Image';

@Component({
  selector: 'app-customer-model',
  templateUrl: './customer-model.component.html',
  styleUrls: ['./customer-model.component.css'],
})
export class CustomerModelComponent {
  userResponse!: Customer[];

  constructor(private customerService: CustomerServiceService) {
    customerService.getAllCustomerData().subscribe((response: Customer[]) => {
      this.userResponse = response;
    });
  }
}
