import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
	declarations: [SidebarComponent],
	imports: [CommonModule, SharedModule, HttpClientModule, HeaderModule],
	exports: [SidebarComponent],
})
export class SidebarModule {}
