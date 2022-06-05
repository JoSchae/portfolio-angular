import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkillsComponent } from './skills.component';

@NgModule({
	imports: [CommonModule],
	exports: [SkillsComponent],
	declarations: [SkillsComponent],
	providers: [],
})
export class SkillsModule {}
