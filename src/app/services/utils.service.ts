import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UtilsService {
	constructor() {}

	public scrollToTop(element: HTMLDivElement): void {
		element.scrollTo(0, 0);
	}
}
