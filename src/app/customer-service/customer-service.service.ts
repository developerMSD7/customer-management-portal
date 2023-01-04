import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Customer } from '../customer-model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerServiceService {
  constructor(private httpRequest: HttpClient) {}

  getAllCustomerData(): Observable<Customer[]> {
    return this.httpRequest.get<Customer[]>('http://localhost:8080/loadAll');
  }

  saveNewData(data: any) {
    return this.httpRequest.post<Customer>('http://localhost:8080/save', data);
  }

  deleteById(id: any) {
    return this.httpRequest.delete<string>(
      'http://localhost:8080/deleteById/' + id
    );
  }
}
