import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionFilterPipe } from './collection-filter.pipe';

const PIPES = [
  CollectionFilterPipe
]

@NgModule({
  declarations: [PIPES],
  exports: [PIPES],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
