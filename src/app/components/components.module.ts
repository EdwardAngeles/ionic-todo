import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCollectionsComponent } from './todo-collections/todo-collections.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { TabHeaderComponent } from './tab-header/tab-header.component';

const COMPONENTS = [
  TodoCollectionsComponent,
  TabHeaderComponent
]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }
