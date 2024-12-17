import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CatComponent } from './cat/cat.component';

@Component({
  selector: 'app-list-cats',
  imports: [NgFor , CatComponent],
  templateUrl: './list-cats.component.html',
  styleUrl: './list-cats.component.css'
})
export class ListCatsComponent {
  listCatsTab: { name: string; age: number; email: string }[] = [
    { name: 'Loki', age: 11, email: 'gorda@lokina.com' },
    { name: 'Poppy', age: 12, email: 'laqueue@courte.com' },
    { name: 'Yoda', age: 6, email: 'yoda@sama.com' }
  ];
}
