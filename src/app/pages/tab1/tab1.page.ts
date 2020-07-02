import { TodoService } from './../../services/todo.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public todoService: TodoService,
    public router: Router,
    public alertController: AlertController
  ) {}
  
  async addNewCollection() {
    const alert = await this.alertController.create({
      header: 'New Collection',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Name of the collection'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Create',
          handler: (data) => {
            if (data.title.length === 0) return;
            
            const newCollection = this.todoService.addCollection(data.title);
            this.router.navigate(['tabs', 'tab1', 'add', newCollection.id]);
          }
        }
      ]
    });

    await alert.present();
  }

}
