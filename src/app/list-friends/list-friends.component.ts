import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-friends',
  imports: [ OneFriendComponent, FormsModule ],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
 listFriendsAuth:boolean = false;

 listFriendsCreationStatus:string = "Tu n'as pas d'ami 😭";

 listFriendsInputText:string="Coin Coin";

 onAddingFriends():void{
  this.listFriendsCreationStatus = "Super, tu as un ami 🥳"
 };

 onUpdateFriendsList(eventInput:Event):void{
  this.listFriendsInputText = (eventInput.target as HTMLInputElement).value;
 }

 constructor(){
  setTimeout(() => {
    this.listFriendsAuth = !this.listFriendsAuth;
  }, 3000);
 }
}
