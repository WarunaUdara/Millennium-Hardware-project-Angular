import { Component } from '@angular/core';
import { NavBarComponent } from "../../common_components/nav-bar/nav-bar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [NavBarComponent,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css'
})
export class AddCustomerComponent {

   customer={
    name: undefined,
    contact: undefined,
    city: undefined
  }
  constructor(private http:HttpClient){
    
  }

  addCustomer(){
    this.http.post("http://localhost:8080/customer/add",this.customer).subscribe
    (response => {
      console.log(response);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Customer Added",
        showConfirmButton: false,
        timer: 1500
      });
      
      
    });
  }
  

}
