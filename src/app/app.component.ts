import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './common_components/nav-bar/nav-bar.component';
import { HeroSectionComponent } from './common_components/hero-section/hero-section.component';
import { AddCustomerComponent } from "./pages/add-customer/add-customer.component";
import { ManageCustomersComponent } from "./pages/manage-customers/manage-customers.component";
import { AddItemComponent } from './pages/add-item/add-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, HeroSectionComponent, AddCustomerComponent, ManageCustomersComponent,AddItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Millennium-Hardware-frontend';
  
}
