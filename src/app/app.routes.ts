import { Routes } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { PostDetailComponentComponent } from './post-detail-component/post-detail-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home',  pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path:'about', component: AboutComponentComponent},
    {path:'posts', component: PostListComponentComponent,
        children:[
            {path: 'post-list', component: PostDetailComponentComponent},
        ]
    },
    {path: '**', component: NotFoundComponentComponent}
];
