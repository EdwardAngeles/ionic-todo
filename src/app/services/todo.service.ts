import { Injectable } from '@angular/core';
import { TodoCollection } from '../models/todo-collection.model';
import { of } from 'rxjs';
import { deepCopy } from './../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  collections: TodoCollection[] = [];
  
  constructor() {
    this.loadData();
  }
  
  addCollection(title: string) {
    const newCollection = new TodoCollection(title);
    this.collections.push(newCollection);
    
    this.saveData();
    return newCollection;
  }
  
  getCollection(id: string) {
    return this.collections.find((collection) => collection.id === id);
  }
  
  getCollections() {
    return of(this.collections);
  }
  
  removeCollection(collection: TodoCollection) {
    this.collections = this.collections.filter((c) => c.id !== collection.id);
    this.saveData();
    return of(this.collections);
  }
  
  updateCollection(newCollection: TodoCollection) {
    let oldCollection: TodoCollection = this.getCollection(newCollection.id);
    if (!oldCollection) return;
    
    oldCollection = deepCopy(newCollection);
    this.saveData();
    
    return oldCollection;
  }
  
  loadData() {
    if (!localStorage.getItem('data')) return;
    this.collections = JSON.parse( localStorage.getItem('data') );
  }
  
  saveData() {
    localStorage.setItem('data', JSON.stringify(this.collections));
  }
  
}
