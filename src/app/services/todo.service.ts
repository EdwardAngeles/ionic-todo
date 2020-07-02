import { Injectable } from '@angular/core';
import { TodoCollection } from '../models/todo-collection.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoCollections: TodoCollection[] = [];
  
  constructor() {
    this.loadData();
  }
  
  addCollection(title: string) {
    const newCollection = new TodoCollection(title);
    this.todoCollections.push(newCollection);
    
    this.saveData();
    return newCollection;
  }
  
  getCollection(id: string) {
    return this.todoCollections.find((collection) => collection.id === id);
  }
  
  getNotCompleted() {
    return this.todoCollections.filter((collection) => !collection.isCompleted);
  }
  
  removeCollection(collection: TodoCollection) {
    this.todoCollections = this.todoCollections.filter((c) => c.id !== collection.id);
    this.saveData();
  }
  
  updateCollection(update: TodoCollection) {
    let collectionToUpdate = this.getCollection(update.id);
    if (!collectionToUpdate) return;
    
    collectionToUpdate = {...update};
    this.saveData();
    
    return collectionToUpdate;
  }
  
  loadData() {
    if (!localStorage.getItem('data')) return;
    this.todoCollections = JSON.parse( localStorage.getItem('data') );
  }
  
  saveData() {
    localStorage.setItem('data', JSON.stringify(this.todoCollections));
  }
  
}
