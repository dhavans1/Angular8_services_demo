import { Component, Input } from '@angular/core';
import { usersService } from '../shared/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  constructor(private usersService: usersService) {}

  @Input() users: string[];

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.usersService.actionEvent.emit();
  }
}
