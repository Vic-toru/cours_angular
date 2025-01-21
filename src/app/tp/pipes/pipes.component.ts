import { CommonModule } from '@angular/common';
import { Component, Pipe , PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Pipe({
  name: 'reverse',
})

export class ReverseTextPipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}


@Component({
  selector: 'app-pipes',
  imports: [FormsModule,CommonModule, ReverseTextPipe], 
  templateUrl: './pipes.component.html',
  // styleUrl: './pipes.component.css'
  template:`

  `,
  styles:[`
      .container {
      max-width: 800px;
    }
    .badge {
      float: right;
    }`]
})
export class PipesComponent {
  currentDate: Date = new Date();
  exampleText: string = 'Angular Pipes';
  productPrice: number = 1234.56;
  decimalValue: number = 42.56789;
  jsonData = { name: 'Angular', version: 19 };
  interactiveText: string = 'Hello, Angular!';
  customText: string = '';
  customPrice: number = 0;
}

