import { Pipe, PipeTransform } from '@angular/core';
import { TodoCollection } from '../models/todo-collection.model';

@Pipe({
  name: 'collectionFilter',
  pure: false
})
export class CollectionFilterPipe implements PipeTransform {

  transform(collections: TodoCollection[], filter: 'all'|'completed'|'notcompleted'): TodoCollection[] {
    
    if (filter === 'all') {
      return collections;
    }
    if (filter === 'completed') {
      return collections.filter((collection) => collection.isCompleted);
    }
    if (filter === 'notcompleted') {
      return collections.filter((collection) => !collection.isCompleted);
    }
    
    return [];
  }

}
