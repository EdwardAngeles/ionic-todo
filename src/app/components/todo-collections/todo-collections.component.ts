import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { TodoCollection } from 'src/app/models/todo-collection.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { shrinkHeight } from 'src/app/animations/sizing';
import { fadeOut } from 'src/app/animations/fading';

@Component({
  selector: 'app-todo-collections',
  templateUrl: './todo-collections.component.html',
  styleUrls: ['./todo-collections.component.scss'],
  animations: [
    trigger('shrinkHeight', [transition(':leave', useAnimation(shrinkHeight))]),
    trigger('fadeOut', [transition(':leave', useAnimation(fadeOut))])
  ]
})
export class TodoCollectionsComponent implements OnInit {

  @Input() currentTab: 'tab1'|'tab2';
  @Input() filter: 'all'|'completed'|'notcompleted' = 'all';
  
  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit() {}
  
  public get collections() : TodoCollection[] {
    const collections = this.todoService.todoCollections;
    
    if (this.filter === 'all') {
      return collections;
    }
    if (this.filter === 'completed') {
      return collections.filter((collection) => collection.isCompleted);
    }
    if (this.filter === 'notcompleted') {
      return collections.filter((collection) => !collection.isCompleted);
    }
    
  }
  
  
  removeCollection(collection: TodoCollection) {
    this.todoService.removeCollection(collection);
  }

}
