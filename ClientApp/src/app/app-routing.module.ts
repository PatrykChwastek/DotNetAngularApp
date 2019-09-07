import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './views/user/users/users.component';
import { RegisterComponent } from './views/user/register/register.component';
import { StoriesComponent } from './views/stories/stories.component';
import { StoryViewComponent } from './views/stories/story-view/story-view.component';
import { CreateStoryComponent } from './views/stories/create-story/create-story.component';
import { LoginComponent } from './views/user/login/login.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent,  canActivate: [AuthGuardService]},
  {path:'register',component:RegisterComponent},
  {path:'stories',component:StoriesComponent},
  {path:'story_new',component:CreateStoryComponent, canActivate: [AuthGuardService]},
  {path:'story_view/:id',component:StoryViewComponent},
  {path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rutingComponents =
[
  HomeComponent,
  UsersComponent,
  RegisterComponent,
  StoriesComponent,
  CreateStoryComponent,
  StoryViewComponent,
  LoginComponent
]
