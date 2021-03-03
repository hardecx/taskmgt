import { Component, OnInit } from '@angular/core';
import { faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
setting=faCog
logout=faPowerOff
account:boolean=false

  constructor() {
    if( sessionStorage.getItem('PWFName')==='Admin'){
      this.account = true
    }
   }

  ngOnInit(): void {
    
  }
Task(){
  sessionStorage.removeItem('Menu')
  sessionStorage.setItem('Menu','Task')
  location.reload();
}
Client(){
  sessionStorage.removeItem('Menu')
  sessionStorage.setItem('Menu','Client')
  location.reload();
}
Card(){
  sessionStorage.removeItem('Menu')
  sessionStorage.setItem('Menu','Card')

}
Acct(){
  sessionStorage.removeItem('Menu')
  sessionStorage.setItem('Menu','Acct')
}
}
