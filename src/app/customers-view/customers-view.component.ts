import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerComponent } from '../models/customer/customer.component';
import { Store, select } from '@ngrx/store';
import { CustomerRemove } from '../customers.action';

@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})
export class CustomersViewComponent implements OnInit {

  
  customers: Observable<CustomerComponent[]>;
  constructor(private store: Store<{ customers: CustomerComponent[] }>) { 
    this.customers = store.pipe(select('customers')); 
  }

  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

  ngOnInit() {
  }

}
