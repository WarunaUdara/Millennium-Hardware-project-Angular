import { Component } from '@angular/core';
import { NavBarComponent } from "../../common_components/nav-bar/nav-bar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [NavBarComponent,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {
  item={
    name:'',
    rentalPerDay:'',
    fine:'',
    isAvailable:false
  }
  constructor(private http:HttpClient){

  }
  addItem(){
    this.http.post("http://localhost:8080/item",this.item).subscribe((res)=>{
      console.log(res);
    })
  }
}
