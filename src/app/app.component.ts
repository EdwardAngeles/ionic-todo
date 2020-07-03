import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInDown, fadeOut } from './animations/fading';
import { shrinkHeight } from './animations/sizing';
import { PlatformService } from './services/platform.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [
    trigger(  'fadeInDown', [transition(':enter', useAnimation( fadeInDown))]),
    trigger('shrinkHeight', [transition(':enter', useAnimation(shrinkHeight))]),
    trigger('fadeOut', [transition(':leave', useAnimation(fadeOut))])
  ]
})
export class AppComponent {
  
  currentPlatform: 'desktop' | 'mobile';
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public platformService: PlatformService
  ) {
    this.initializeApp();
    this.updatePlatform();
  }
  
  updatePlatform() {
    if (this.platform.is('desktop')) this.currentPlatform = 'desktop';
    if (this.platform.is( 'mobile')) this.currentPlatform = 'mobile';
    
    if (window.innerWidth > 450) this.currentPlatform = 'desktop';
    if (window.innerWidth < 450) this.currentPlatform = 'mobile';
    
    this.platformService.current = this.currentPlatform;
    
    console.log('window.innerWidth', window.innerWidth);
    console.log('update platform...', this.currentPlatform);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
