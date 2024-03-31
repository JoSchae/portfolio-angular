import { Component } from '@angular/core';

@Component({
	selector: 'js-portfolio-not-found',
	standalone: true,
	imports: [],
	templateUrl: './not-found.component.html',
	styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
	public readonly catImageUrl = 'https://cataas.com/cat';
	public readonly catImageAlt = 'A random cat';
}
