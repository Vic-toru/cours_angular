import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-data',
  imports: [FormsModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  name: string = '';
  age: number = 0;
  @Output() userUpdated = new EventEmitter<{ name: string, age: number }>();

  updateUserData() {
    const updatedUser = { name: this.name, age: this.age };
    
    this.userUpdated.emit(updatedUser);
  }

}
