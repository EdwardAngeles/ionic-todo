import { TodoService } from './../../services/todo.service';
import { Component, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { map, take } from 'rxjs/operators';
import { TodoCollection } from 'src/app/models/todo-collection.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'src/app/animations/fading';
import { DOCUMENT } from '@angular/common';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
  ]
})
export class Tab1Page {

  collections: TodoCollection[] = [];
  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public todoService: TodoService,
    public router: Router,
    public alertController: AlertController,
    public renderer: Renderer2,
    public platformService: PlatformService
  ) {}
  
  async addNewCollection() {
    const alert = await this.alertController.create({
      header: 'New List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Name of the list'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Create',
          handler: (data) => {
            if (data.title.length === 0) return;
            
            const newCollection = this.todoService.addCollection(data.title);
            // this.router.navigate(['tabs', 'tab1', 'add', newCollection.id]);
            this.featchCollections();
          }
        }
      ]
    });

    await alert.present().then(() => {
      if (this.platformService.current!=='desktop') return;
      const firstInput: any = document.querySelector('ion-alert input');
      firstInput.focus();
      return;
    });
  }
  
  ionViewWillEnter() {
    this.featchCollections();
  }
  
  onCollectionRemoved() {
    this.featchCollections();
  }
  
  featchCollections() {
    this.todoService.getCollections()
    .pipe(take(1), map(collections => collections.filter(item => !item.isCompleted)))
    .subscribe(collections => this.collections = collections);
  }

}
