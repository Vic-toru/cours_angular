import { Component } from '@angular/core';
import { Component6Component } from './component-6/component-6.component';
import { Component7Component } from './component-7/component-7.component';

@Component({
  selector: 'app-component-3',
  imports: [ Component6Component , Component7Component ],
  templateUrl: './component-3.component.html',
  styleUrl: './component-3.component.css'
})
export class Component3Component {

}
