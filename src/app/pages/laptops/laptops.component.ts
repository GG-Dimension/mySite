import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  laptops = [
    {
      brand: 'Asus Rog - Zephyrus M16',
      image: 'Zephyrus-m16.jpg',
      specification: '16 2560X1600 240hz Mini LED, I9 13980HX, RTX4080, 32GB, 1TB',
      description: 'Small and light laptop with mini led screen',
      price: '2699$'
    },
    {
      brand: 'Asus Rog - Strix Scar 16',
      image: 'Scar-16.jpg',
      specification: '16 2560X1600 240hz Mini LED, I9 13980HX, RTX4080, 32GB, 1TB',
      description: 'Regular 16 inch laptop with mini led screen 2.6kg',
      price: '2899$'
    },
    {
      brand: 'Asus Rog - Strix G18',
      image: 'Strix G-18.jpg',
      specification: '18 2560X1600 240hz Ips, I9 13980HX, RTX4080, 16GB, 1TB',
      description: '18 inch laptop with Ips screen',
      price: '2499$'
    },
    {
      brand: 'Alienware - M18',
      image: 'Alienware-M18.jpg',
      specification: '16 2560X1600 240hz Mini LED, I9 13980HX, RTX4080, 32GB, 1TB',
      description: 'Small and light laptop with mini led screen',
      price: '2700$'
    },
    {
      brand: 'Razer blade - 18',
      image: 'Razer Blade-18.jpg',
      specification: '16 2560X1600 240hz Mini LED, I9 13980HX, RTX4080, 32GB, 1TB',
      description: 'Small and light laptop with mini led screen',
      price: '2700$'
    },
    {
      brand: 'Alienware - M16',
      image: 'Alienware M-16.jpg',
      specification: '16 2560X1600 240hz Mini LED, I9 13980HX, RTX4080, 32GB, 1TB',
      description: 'Small and light laptop with mini led screen',
      price: '2700$'
    },
    {
      brand: 'MSI - GT77',
      image: 'MSI gt77.jpg',
      specification: '16 2560X1600 240hz Mini LED, I9 13980HX, RTX4080, 32GB, 1TB',
      description: 'Small and light laptop with mini led screen',
      price: '2700$'
    },
    {
      brand: 'ACER - Helios18',
      image: 'Helios-18.jpg',
      specification: '16 2560X1600 240hz Mini LED, I9 13980HX, RTX4080, 32GB, 1TB',
      description: 'Small and light laptop with mini led screen',
      price: '2700$'
    },
  
  ];





  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.laptops, event.previousIndex, event.currentIndex);
  }
}

