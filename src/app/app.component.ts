import { Component} from '@angular/core';
import { ModalServiceService } from './services/modal-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  //Название проекта
  title = 'to-do list'
  constructor(
    public modalService : ModalServiceService
  ){}

 
}
