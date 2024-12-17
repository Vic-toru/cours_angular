import { Component } from '@angular/core';
import { OneFriendComponent } from './one-friend/one-friend.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-list-friends',
  imports: [ OneFriendComponent, FormsModule , NgIf ],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css'
})
export class ListFriendsComponent {
 listFriendsAuth:boolean = false;

 listFriendCreationStatus:boolean = false;

 listFriendsCreationStatus:string = "Tu n'as pas d'ami 😭";

 listFriendsInputText:string="Coin Coin";

 leFriend:string = "";

 listFriendCreated:boolean= false;

 onAddingFriends():void{
  this.listFriendsCreationStatus = "Super, tu as un ami 🥳";
  this.listFriendCreated = true;
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
