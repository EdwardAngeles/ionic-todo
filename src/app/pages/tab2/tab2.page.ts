import { TodoCollection } from 'src/app/models/todo-collection.model';
import { TodoService } from './../../services/todo.service';
import { Component } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeOut, fadeIn } from 'src/app/animations/fading';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
  ]
})
export class Tab2Page {

  collections: TodoCollection[] = [];
  
  constructor(
    private todoService: TodoService
  ) {}
  
  ionViewWillEnter() {
    this.featchCollections();
  }
  
  onCollectionRemoved() {
    this.featchCollections();
  }
  
  featchCollections() {
    this.todoService.getCollections()
    .pipe(take(1), map(collections => collections.filter(item => item.isCompleted)))
    .subscribe(collections => this.collections = collections);
  }

}
