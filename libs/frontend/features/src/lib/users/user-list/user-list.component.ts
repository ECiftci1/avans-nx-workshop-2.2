import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
    selector: 'avans-nx-workshop-user-list',
    templateUrl: './user-list.component.html',
    styles: []
})
export class UserListComponent implements OnInit{
    users: User[] = [];

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = this.userService.getUsers();
    }
}