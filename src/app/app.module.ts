import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { CustomerComponent } from './models/customer/customer.component';

import { CustomerReducer } from './customers.reducer';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerAddComponent,
    CustomersViewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ customers: CustomerReducer })
    // StoreModule.forRoot(reducers, {
    //   metaReducers,
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
