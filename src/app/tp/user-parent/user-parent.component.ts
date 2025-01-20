import { Component } from '@angular/core';
import { ActiveUserComponent } from './active-user/active-user.component';
import { UserDataComponent } from './user-data/user-data.component';

@Component({
  selector: 'app-user-parent',
  imports: [ ActiveUserComponent , UserDataComponent ],
  templateUrl: './user-parent.component.html',
  styleUrl: './user-parent.component.css'
})
export class UserParentComponent {

  user = {
    name: 'Jean-Théo Le Fripon',
    age: 16
  };

}
