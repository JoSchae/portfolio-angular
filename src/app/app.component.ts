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

	constructor() {
		this.init();
	}

	private init(): void {
		this.startStarfallAnimation();
	}

	private startStarfallAnimation(): void {
		const fragment = document.createDocumentFragment();
		for (let i = 0; i < 100; i++) {
			const star = document.createElement('div');
			star.className = 'star';
			star.style.left = Math.random() * 100 + 'vw';
			star.style.top = Math.random() * 100 + 'vh';
			star.style.animationDuration = Math.random() * 10 + 2 + 's';
			fragment.appendChild(star);
		}
		document.body.appendChild(fragment);
	}
}
