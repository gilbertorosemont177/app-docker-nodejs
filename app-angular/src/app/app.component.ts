import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/generic/userservice/userservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-angular';
  constructor(private user:UserService){
      
  }
  ngOnInit(): void {
    this.user.get().then((result)=>result.subscribe((r=>console.log(r))));
    console.log("jdjdjjd")
  }

  

}
