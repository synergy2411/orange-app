import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCustomerComponent } from './new-customer/new-customer.component';

@NgModule({
    declarations :      [ NewCustomerComponent],
    imports     :       [ CommonModule],
    providers   :       [],
    exports     :       [ NewCustomerComponent]
})
export class CustomerModule{}