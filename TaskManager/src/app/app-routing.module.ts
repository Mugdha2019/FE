import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';


const routes: Routes = [{ path: '', redirectTo: 'view', pathMatch: 'full' },
{ path: 'add', component: AddTaskComponent },
{ path: 'view', component: TaskListComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
