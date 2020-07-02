import { TodoItem } from './todo-item.model';
import { Data } from '@angular/router';

export class TodoCollection {
  
  id: string;
  title: string;
  todoItems: TodoItem[];
  createdAt: Data;
  completedAt: Data;
  isCompleted: boolean;
  
  constructor(title: string) {
    this.id = Math.random().toString(36).substring(7);
    
    this.title = title;
    this.createdAt = new Date();
    this.completedAt = null;
    this.isCompleted = false;
    this.todoItems = [];
  }
  
}
