import { Inject, NgModule, inject } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from './user.service';
import { AppService } from '../app.service';

import { UserInsertComponent } from './user-insert/user-insert.component';
import { UserListComponent } from './user-list/user-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { tap } from 'rxjs';

const userGuard = () => {
  const router = inject(Router);
  const service = inject(AppService);
  return service.isLoggedIn$.pipe(
    tap((isLoggedIn) => {
      if (!isLoggedIn) router.navigate(['/login']);
    })
  );
};

const routes: Routes = [
  { path: 'list', component: UserListComponent, canActivate: [userGuard] },
  { path: 'insert', component: UserInsertComponent, canActivate: [userGuard] },
  { path: '', component: WelcomeComponent, canActivate: [userGuard] },
];

@NgModule({
  declarations: [UserListComponent, UserInsertComponent, WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
})
export class UsersModule {}
