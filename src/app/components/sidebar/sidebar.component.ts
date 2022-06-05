import { Component } from '@angular/core';
import { skills } from 'src/assets/data/sidebar-data';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
	public skills = skills
		.sort((a, b) => -1 * (a.percentage - b.percentage))
		.slice(0, 5);
}
