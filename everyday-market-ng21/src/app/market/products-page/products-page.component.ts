import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuComponent } from '../category-menu/category-menu.component';
import { Category } from '../models/category';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule, CategoryMenuComponent],
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  categoryList: Category[] = [
    { id: 1, name: 'Fresh Fruits', description: 'Organic and fresh fruits', price: 4.99 },
    { id: 2, name: 'Vegetables', description: 'Farm fresh vegetables', price: 3.99 },
    { id: 3, name: 'Dairy Products', description: 'Milk, cheese, and eggs', price: 5.99 },
    { id: 4, name: 'Bakery Items', description: 'Fresh bread and pastries', price: 6.99 },
    { id: 5, name: 'Beverages', description: 'Juices, sodas, and more', price: 2.99 }
  ];

  onCategorySelected(category: Category): void {
    alert(`You selected: ${category.name}\nPrice: $${category.price}\n${category.description}`);
  }
}
