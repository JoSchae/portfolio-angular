import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
	selector: 'js-portfolio-root',
	standalone: true,
	imports: [
		CommonModule,
		RouterOutlet,
		NavigationComponent,
		SidebarComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'portfolio-angular';
}
