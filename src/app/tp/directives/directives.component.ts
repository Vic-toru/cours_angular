import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [NgClass , NgFor , NgStyle],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  isDisplay:boolean = false;
  tabLog: number[] = [];

afficher(){
  this.isDisplay= !this.isDisplay;
  this.tabLog.push(this.tabLog.length + 1);
}

}
