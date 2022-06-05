import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '../components/header/header.module';
import { SkillsModule } from '../components/skills/skills.module';
import { SummaryModule } from '../components/summary/summary.module';
import { MainPageComponent } from './main-page.component';

@NgModule({
	declarations: [MainPageComponent],
	imports: [CommonModule, HeaderModule, SkillsModule, SummaryModule],
})
export class MainPageModule {}
