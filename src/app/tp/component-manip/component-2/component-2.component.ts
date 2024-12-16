import { Component } from '@angular/core';
import { Component4Component } from './component-4/component-4.component';
import { Component5Component } from './component-5/component-5.component';

@Component({
  selector: 'app-component-2',
  imports: [ Component4Component , Component5Component],
  templateUrl: './component-2.component.html',
  styleUrl: './component-2.component.css'
})
export class Component2Component {

}
