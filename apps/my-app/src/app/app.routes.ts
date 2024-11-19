import { Route } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { UserListComponent } from 'libs/frontend/features/src/lib/users/user-list/user-list.component';
import { UserDetailsComponent } from 'libs/frontend/features/src/lib/users/user-details/user-details.component';
import { UserEditComponent } from 'libs/frontend/features/src/lib/users/user-edit/edit.component';


export const appRoutes: Route[] = [
    { path: '', pathMatch: "full", redirectTo: 'users' },
    { path: 'about', pathMatch: "full", component: AboutComponent },
    { path: 'users', pathMatch: "full", component: UserListComponent },
    { path: 'user/new', pathMatch: "full", component: UserEditComponent },
    { path: 'users/:id', pathMatch: "full", component: UserDetailsComponent },
    // { path: 'users/:id/edit', pathMatch: "full", component: UserEditComponent },
    { path: '**', pathMatch: "full", redirectTo: 'users' }
];
    