import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  constructor(private httpRequest: HttpClient) {}
 
  getAllCustomerData() {
    return this.httpRequest.get("http://localhost:9090/getAllCustomers");
  }
}
