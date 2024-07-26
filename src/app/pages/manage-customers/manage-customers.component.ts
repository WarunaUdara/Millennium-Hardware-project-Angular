import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../../common_components/nav-bar/nav-bar.component";
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manage-customers',
  standalone: true,
  imports: [NavBarComponent,CommonModule,NgFor,HttpClientModule],
  templateUrl: './manage-customers.component.html',
  styleUrl: './manage-customers.component.css'
})
export class ManageCustomersComponent {

   objectList:any = []
   constructor(private http:HttpClient){

   }
  ngOnInit(): void {
    this.http.get("http://localhost:8080/customer/get-all").subscribe(
      (response) => {this.objectList=response}
    )
  }

  removeCustomer(customer:any){
    var obj:any;
    this.http.delete("http://localhost:8080/customer/"+customer.id).subscribe(
      (response) => {
        obj=response
        console.log(obj.isDeletedSuccessful);
        
        if(obj.isDeletedSuccessful==true){
        
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Deletion Done",
            showConfirmButton: false,
            timer: 1500
          });
          this.ngOnInit()
        }
        
      }
    )
  }

  updateCustomer(){}


}
