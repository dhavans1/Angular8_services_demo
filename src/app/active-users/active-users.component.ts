import { Component, Input } from '@angular/core';
import { usersService } from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  constructor(private usersService: usersService) {}

  @Input() users: string[];

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
    this.usersService.actionEvent.emit();
  }
}
