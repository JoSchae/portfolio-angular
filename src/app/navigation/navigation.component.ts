import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
	selector: 'js-portfolio-navigation',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
	public showMobileNavbar = false;

	public toggleNavbar(): void {
		this.showMobileNavbar = !this.showMobileNavbar;
	}
}
