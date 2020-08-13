import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { AuthGuard } from './service/auth.guard';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'feedback',
  component: FeedbackComponent,
  canActivate: [AuthGuard]
},
{
  path: 'feedback-list',
  component: FeedbackListComponent,
  canActivate: [AuthGuard]
}, { path: '', redirectTo: 'login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
