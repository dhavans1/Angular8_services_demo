import { Component, OnInit } from '@angular/core';
import { usersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private usersService: usersService){}

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  counter: number;

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.counter = 0;
    this.usersService.actionEvent.subscribe(() => this.counter = this.counter+1);
  }
}
