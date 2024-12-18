import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cat',
  imports: [NgStyle, NgClass],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {
  @Input() name: string = ''; 
  @Input() age: number = 0;   
  @Input() email: string = '';

  oneCatStyle:string = '';
  OneCatStatus:boolean = false;

  constructor(){
    let random = Math.random();
    console.log(random)
    if (random < 0.5) {
      this.oneCatStyle = 'OFF';
    } else {
      this.oneCatStyle = 'ON';
    }
  }

  getColor() :string {
    if (this.oneCatStyle == 'OFF') {
      return 'magenta';
    }
      return 'chartreuse';
  }
}
