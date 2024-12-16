import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFriendId:number = Math.round(Math.random()*10) ;
  oneFriendName:string = 'La grosse mite à Dudule';
  oneFriendAge:number = Math.round(Math.random()*75);
  oneFriendStatus:string = 'Online';
  oneFriendBio:string = "Je suis le refrain d'une bonne chanson paillarde mixé avec la chute d'une blague bien beauf !";
  oneFriendXss:string = "<script>alert('Hello, XSS')</script>";

  getOneFriendStatus(){
    return this.oneFriendStatus;
  }
}