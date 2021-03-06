import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header.component';

@NgModule({
	imports: [CommonModule, SharedModule],
	exports: [HeaderComponent],
	declarations: [HeaderComponent],
	providers: [],
})
export class HeaderModule {}
