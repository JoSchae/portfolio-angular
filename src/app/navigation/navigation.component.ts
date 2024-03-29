import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
	selector: 'js-portfolio-navigation',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss',
})
export class NavigationComponent implements OnInit {
	@Input()
	public innerContainer!: HTMLDivElement;

	public showMobileNavbar = false;

	constructor(private readonly _utilService: UtilsService) {}

	ngOnInit() {
		const theme = localStorage.getItem('theme');
		if (theme) {
			document.body.setAttribute('data-theme', theme);
		}
	}

	public mobileClick(): void {
		this.toggleNavbar();
		this.scrollToTop();
		this.showMobileNavbar = false;
	}

	public toggleNavbar(): void {
		this.showMobileNavbar = !this.showMobileNavbar;
	}

	public scrollToTop(): void {
		this._utilService.scrollToTop(this.innerContainer);
	}

	public toggleTheme() {
		const body = document.body;
		const currentTheme = body.getAttribute('data-theme');
		if (currentTheme === 'dark') {
			body.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		} else {
			body.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		}
	}
}
