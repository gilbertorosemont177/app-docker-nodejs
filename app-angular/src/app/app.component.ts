import { Component } from '@angular/core';
import { UserService } from 'src/generic/userservice/userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';
  constructor(private user:UserService){
      this.user.get();
      
  }
  

}
