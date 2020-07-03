import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  current: 'desktop' | 'mobile';
  
  constructor() {}
  
}
