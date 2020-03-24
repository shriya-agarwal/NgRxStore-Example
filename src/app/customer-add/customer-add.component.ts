
import {Component} from '@angular/core'; 
import {select, Store} from '@ngrx/store'; 
import { CustomerComponent } from '../models/customer/customer.component';
import {Observable} from 'rxjs'; 
import {CustomerAdd} from '../customers.action'; 
@Component({ 
  selector: 'app-customer-add', 
  templateUrl: './customer-add.component.html', 
  styleUrls: ['./customer-add.component.css'] 
}) 
export class CustomerAddComponent { 
  customers: Observable<CustomerComponent[]>; 
  constructor(private store: Store<{ customers: CustomerComponent[] }>) { 
    this.customers = store.pipe(select('customers')); 
  } 
  AddCustomer(customerName: string) { 
    const customer = new CustomerComponent(); 
    customer.name = customerName; 
    this.store.dispatch(new CustomerAdd(customer)); 
  } 
}