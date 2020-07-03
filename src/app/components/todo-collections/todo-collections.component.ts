import { fadeInDown } from './../../animations/fading';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoCollection } from 'src/app/models/todo-collection.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { shrinkHeight } from 'src/app/animations/sizing';
import { fadeOut } from 'src/app/animations/fading';
import { AlertController, IonList } from '@ionic/angular';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'app-todo-collections',
  templateUrl: './todo-collections.component.html',
  styleUrls: ['./todo-collections.component.scss'],
  animations: [
    trigger(  'fadeInDown', [transition(':enter', useAnimation( fadeInDown))]),
    trigger('shrinkHeight', [transition(':leave', useAnimation(shrinkHeight))]),
    trigger('fadeOut', [transition(':leave', useAnimation(fadeOut))])
  ]
})
export class TodoCollectionsComponent implements OnInit {

  @Input() currentTab: 'tab1'|'tab2';
  @Input() collections: TodoCollection[] = [];
  @Output() collectionRemoved = new EventEmitter<TodoCollection>();
  
  @ViewChild(IonList) ionList: IonList;
  
  constructor(
    public todoService: TodoService,
    public alertController: AlertController,
    public platformService: PlatformService
  ) { }

  ngOnInit() {
    console.log('ionList', this.ionList);
  }
  
  removeCollection(collection: TodoCollection) {
    this.todoService.removeCollection(collection);
    this.collectionRemoved.emit(collection);
  }
  
  async editCollection(collection: TodoCollection) {
    const alert = await this.alertController.create({
      header: 'Edit List',
      inputs: [
        {
          name: 'title',
          type: 'text',
          value: collection.title,
          placeholder: 'Name of the list',
          attributes: {
            autoComplete: 'off'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => this.ionList.closeSlidingItems()
        },
        {
          text: 'Update',
          handler: (data) => {
            if (data.title.length === 0) return;
            
            collection.title = data.title;
            this.todoService.updateCollection(collection);
            
            this.ionList.closeSlidingItems();
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

}
