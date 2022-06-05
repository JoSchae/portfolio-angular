import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CirclePrecentageComponent } from './circle-precentage/circle-precentage.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@NgModule({
	declarations: [CirclePrecentageComponent, ButtonComponent],
	imports: [CommonModule, RouterModule],
	exports: [CirclePrecentageComponent, ButtonComponent],
})
export class SharedModule {}
