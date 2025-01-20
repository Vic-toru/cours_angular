import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-data',
  imports: [FormsModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  @Input() user: { name: string, age: number } | undefined;
  @Output() userUpdated = new EventEmitter<{ name: string, age: number }>();

  updateUserData() {
    if (this.user) {
      this.userUpdated.emit({
        name: this.user.name,
        age: this.user.age
      });
    }
  }
}
