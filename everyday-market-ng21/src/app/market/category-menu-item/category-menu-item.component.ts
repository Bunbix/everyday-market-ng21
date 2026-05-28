import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  standalone: true,
  templateUrl: './category-menu-item.component.html',
  styleUrls: ['./category-menu-item.component.css']
})
export class CategoryMenuItemComponent {
  @Input() categoryName = '';
  @Input() categoryPrice?: number;
  @Output() itemClicked = new EventEmitter<string>();

  onItemClick(): void {
    this.itemClicked.emit(this.categoryName);
  }
}