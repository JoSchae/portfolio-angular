import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillsComponent } from './skills/skills.component';
import { CvComponent } from './cv/cv.component';

export const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'cv', component: CvComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: '**', component: NotFoundComponent },
];
