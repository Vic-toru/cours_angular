import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list-friends',
  imports: [ RouterLink , OneFriendComponent],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
 listFriendsAuth:boolean = false;

 constructor(){
  setTimeout(() => {
    this.listFriendsAuth = !this.listFriendsAuth;
  }, 3000);
 }
}
