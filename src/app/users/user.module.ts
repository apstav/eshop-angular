import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UserService } from './user.service';
import { UserInsertComponent } from './user-insert/user-insert.component';

const routes: Routes = [
  { path: 'list', component: UserListComponent },
  { path: 'insert', component: UserInsertComponent },
];

@NgModule({
  declarations: [UserListComponent, UserInsertComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
})
export class UsersModule {}
