import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { DevicetypeDirective } from './directives/devicetype/devicetype.directive';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
	declarations: [AppComponent, DevicetypeDirective],
	imports: [BrowserModule, AppRoutingModule, MainPageModule, SidebarModule],
	providers: [DeviceDetectorService],
	bootstrap: [AppComponent],
})
export class AppModule {}
