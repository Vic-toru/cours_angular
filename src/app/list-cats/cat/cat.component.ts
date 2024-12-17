import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-cat',
  imports: [],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {
  @Input() name: string = ''; 
  @Input() age: number = 0;   
  @Input() email: string = '';
}
