import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';

export interface IStar {
	startLeft: number | string;
	startTop: number | string;
	duration: number;
	backgroundColor: string;
}

@Component({
	selector: 'js-portfolio-root',
	standalone: true,
	imports: [CommonModule, RouterOutlet, NavigationComponent, SidebarComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	@ViewChild('innerContainer', { static: true })
	public innerContainer!: HTMLDivElement;

	public stars: IStar[] = [];

	ngOnInit() {
		const isPrideMonth = new Date().getMonth() === 5;
		console.log(new Date().getMonth());
		// for (let i = 0; i < 1000; i++) {
		// 	const startLeft = Math.random() * 100 + 'vw';
		// 	const startTop = Math.random() * 100 + 'vh';
		// 	this.stars.push({
		// 		startLeft: startLeft,
		// 		startTop: startTop,
		// 		duration: Math.random() * 10 + 2,
		// 		backgroundColor: isPrideMonth
		// 			? 'hsl(' + Math.random() * 360 + ', 100%, 50%)'
		// 			: 'white',
		// 	});
		// 	setTimeout(() => {}, 10);
		// }
		for (let i = 0; i < 100; i++) {
			const startLeft = Math.random() * 100 + 'vw';
			const startTop = Math.random() * 200 - 100 + 'vh'; // random value between -100vh and 100vh
			this.stars.push({
				startLeft: startLeft,
				startTop: startTop,
				duration: Math.random() * 10 + 2,
				backgroundColor: isPrideMonth ? 'hsl(' + Math.random() * 360 + ', 100%, 50%)' : 'white',
			});
		}
	}
}
