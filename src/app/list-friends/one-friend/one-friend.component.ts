import { Component } from '@angular/core';

@Component({
  selector: 'app-one-friend',
  imports: [],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent {
  oneFriendId:number = Math.round(Math.random()*10) ;
  oneFriendName:string = 'Yuijiro Hanma';
  oneFriendAge:number = Math.round(Math.random()*75);
  oneFriendStatus:string = 'Online';
  oneFriendBio:string = "Je suis une menace pour la planète entière, mouahahahahahah";
  oneFriendXss:string = "<script>alert('Hello, XSS')</script>";
  oneFriendImg:string = "https://picsum.photos/300/300";

  getOneFriendStatus(){
    return this.oneFriendStatus;
  }
}
