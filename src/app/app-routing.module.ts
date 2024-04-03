import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberComponent } from './member/member.component';
import { EventsComponent } from './events/events.component';
import { ToolsComponent } from './tools/tools.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ArticleComponent } from './article/article.component';
import { ArticleFormComponent } from './article-form/article-form.component';

const routes: Routes = [
  {
    path: 'create',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: 'members',
    pathMatch: 'full',
    component: MemberComponent,
  },
  {
    path: 'dashboard',
    pathMatch: 'full',
    component: DashboardComponent,
  },
  {
    path: ':id/edit',
    pathMatch: 'full',
    component: MemberFormComponent,
  },
  {
    path: 'articles',
    pathMatch: 'full',
    component: ArticleComponent,
  },
  {
    path: 'articleform',
    pathMatch: 'full',
    component: ArticleFormComponent,
  },
  {
    path: 'events',
    pathMatch: 'full',
    component: EventsComponent,
  },
  {
    path: 'tools',
    pathMatch: 'full',
    component: ToolsComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },

  {
    path: '**',
    redirectTo: 'members',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
