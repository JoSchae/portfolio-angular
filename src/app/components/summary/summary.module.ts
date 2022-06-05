import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SummaryComponent } from './summary.component';

@NgModule({
	imports: [CommonModule],
	exports: [SummaryComponent],
	declarations: [SummaryComponent],
	providers: [],
})
export class SummaryModule {}
