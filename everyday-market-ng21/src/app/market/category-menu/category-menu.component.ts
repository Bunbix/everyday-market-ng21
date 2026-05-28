import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuItemComponent } from '../category-menu-item/category-menu-item.component';
import { Category } from '../models/category';

@Component({
  selector: 'app-category-menu',
  standalone: true,
  imports: [CommonModule, CategoryMenuItemComponent],
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent {
  @Input() categories: Category[] = [];
  @Output() categorySelected = new EventEmitter<Category>();

  onItemClicked(category: Category): void {
    this.categorySelected.emit(category);
  }
}
