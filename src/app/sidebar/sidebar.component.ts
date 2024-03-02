import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'js-portfolio-sidebar',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './sidebar.component.html',
	styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {}
