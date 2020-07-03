import { Component, OnInit, Inject, Renderer2, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.scss'],
})
export class TabHeaderComponent implements OnInit {

  @Input() title: string;
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public renderer: Renderer2
  ) { }

  ngOnInit() {}
  
  toggleTheme() {
    console.log(this.document.body.classList);
    console.log(this.document.body.classList.contains('dark'));
    
    if (this.document.body.classList.contains('dark')) {
      this.renderer.removeClass(this.document.body, 'dark');
    } else {
      this.renderer.addClass(this.document.body, 'dark');
    }
  }

}
