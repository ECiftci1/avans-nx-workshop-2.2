import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly users: User[] = [
    {
      id: 0,
      firstName: 'Emre',
      lastName: 'Ciftci',
      emailAddress: 'Emre.c@test.com',
      phoneNumber: '06 12345678',
      bio: 'Lorem ipsum dolor sit amet. Et repellendus nisi aut laboriosam repudiandae est laborum deleniti et numquam itaque sit perferendis earum qui libero nihil ad cupiditate dolore. Sit doloribus maiores sit voluptate pariatur ut natus quos non quia dolorem id nisi numquam. Est saepe reprehenderit qui natus sapiente et nemo tempora. Sit galisum molestias et esse sapiente quo numquam corrupti a pariatur corporis et quisquam eius nam voluptatibus recusandae.'
    },
    {
      id: 1,
      firstName: 'Kerel',
      lastName: 'Man',
      emailAddress: 'Kerel.m@test.com',
      phoneNumber: '06 22345678',
      bio: 'Lorem ipsum dolor sit amet. Et repellendus nisi aut laboriosam repudiandae est laborum deleniti et numquam itaque sit perferendis earum qui libero nihil ad cupiditate dolore. Sit doloribus maiores sit voluptate pariatur ut natus quos non quia dolorem id nisi numquam. Est saepe reprehenderit qui natus sapiente et nemo tempora. Sit galisum molestias et esse sapiente quo numquam corrupti a pariatur corporis et quisquam eius nam voluptatibus recusandae.'
    },
    {
      id: 2,
      firstName: 'Geert',
      lastName: 'Jan',
      emailAddress: 'Geer.j@test.com',
      phoneNumber: '06 32345678',
      bio: 'Lorem ipsum dolor sit amet. Et repellendus nisi aut laboriosam repudiandae est laborum deleniti et numquam itaque sit perferendis earum qui libero nihil ad cupiditate dolore. Sit doloribus maiores sit voluptate pariatur ut natus quos non quia dolorem id nisi numquam. Est saepe reprehenderit qui natus sapiente et nemo tempora. Sit galisum molestias et esse sapiente quo numquam corrupti a pariatur corporis et quisquam eius nam voluptatibus recusandae.'
    },
  ];

  constructor() {
    console.log('UserService constructor aangeroepen');
  }

  getUsers(): User[] {
    console.log('getUsers aangeroepen');
    return this.users;
  }

  getUsersAsObservable(): Observable<User[]> {
    console.log('getUsersAsObservable aangeroepen');
    // 'of' is een rxjs operator die een Observable
    // maakt van de gegeven data.
    return of(this.users);
  }

  getUserById(id: number): User {
    console.log('getUserById aangeroepen');
    return this.users.filter((user) => user.id === id)[0];
  }
}