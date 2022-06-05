import { Directive, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Directive({
  selector: '[devicetype]'
})
export class DevicetypeDirective {

  constructor(private readonly element: ElementRef, private readonly deviceDetectorService: DeviceDetectorService) {
      this.deviceDetectorService.setDeviceInfo();
      this.element.nativeElement.classList.add(
          this.deviceDetectorService.isMobile() ? 'is-mobile' : 'is-desktop'
      );
  }

}
