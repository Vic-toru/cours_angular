import { Component } from '@angular/core';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';
import { Component3Component } from './component-3/component-3.component';

@Component({
  selector: 'app-component-manip',
  imports: [ Component1Component , Component2Component , Component3Component ],
  templateUrl: './component-manip.component.html',
  styleUrl: './component-manip.component.css'
})
export class ComponentManipComponent {

}
