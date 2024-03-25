import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
	selector: 'js-portfolio-home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	@ViewChildren('section')
	private sections!: QueryList<ElementRef>;

	constructor() {}

	public toggleShowMore(sectionId: string): void {
		const hiddenTextSection = this.sections.find((el) => el.nativeElement.id === sectionId);
		const hiddenText = hiddenTextSection?.nativeElement.querySelector('.hidden-text');
		const showMoreButton = hiddenTextSection?.nativeElement.querySelector('.show-more');
		if (!hiddenText) {
			console.error('Element not found: ', 'hiddenText: ', hiddenText);
			return;
		}
		if (hiddenText.classList.contains('hidden')) {
			hiddenText.classList.remove('hidden');
			showMoreButton.textContent = 'Show less';
		} else {
			hiddenText.classList.add('hidden');
			showMoreButton.textContent = 'Show more';
		}
	}
}
