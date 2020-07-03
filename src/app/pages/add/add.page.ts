import { fadeInDown, fadeOut } from './../../animations/fading';
import { TodoCollection } from './../../models/todo-collection.model';
import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TodoItem } from 'src/app/models/todo-item.model';
import { trigger, transition, useAnimation } from '@angular/animations';
import { shrinkHeight } from 'src/app/animations/sizing';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  animations: [
    trigger(  'fadeInDown', [transition(':enter', useAnimation( fadeInDown))]),
    trigger( 'fadeOutLeft', [transition(':leave', useAnimation(fadeOut))]),
    trigger('shrinkHeight', [transition(':leave', useAnimation(shrinkHeight))]),
    trigger('fadeOut', [transition(':leave', useAnimation(fadeOut))])
  ],
})
export class AddPage implements OnInit {

  todoCollection: TodoCollection;
  backUrl: string;

  constructor(
    public todoService: TodoService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      const id = paramMap.get('collectionId');
      this.todoCollection = this.todoService.getCollection(id);
    });
    
    if (this.router.url.includes('/tabs/tab1')) this.backUrl = '/tabs/tab1';
    if (this.router.url.includes('/tabs/tab2')) this.backUrl = '/tabs/tab2';
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    console.log({...form});

    const newTodoItem = new TodoItem(form.value.item.trim());
    this.todoCollection.todoItems.push(newTodoItem);
    
    form.reset();
    form.resetForm();
    
    this.updateCollectionStatus();
    this.todoService.updateCollection(this.todoCollection);
  }
  
  onItemChange(item: TodoItem) {
    this.updateCollectionStatus();
    this.todoService.saveData();
  }
  
  removeItem(itemIndex: number) {
    this.todoCollection.todoItems.splice(itemIndex, 1);
    
    this.updateCollectionStatus();
    this.todoService.saveData();
  }
  
  updateCollectionStatus() {
    const items = this.todoCollection.todoItems;
    const undoneItems = this.todoCollection.todoItems.filter(item => !item.isCompleted);
    
    if (items.length > 0 && undoneItems.length === 0) {
      this.todoCollection.completedAt = new Date();
      this.todoCollection.isCompleted = true;
    } else {
      this.todoCollection.completedAt = null;
      this.todoCollection.isCompleted = false;
    }
  }

}
