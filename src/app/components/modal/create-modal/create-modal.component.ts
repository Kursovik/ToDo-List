import { Component } from '@angular/core';

import { ModalServiceService } from 'src/app/services/modal-service.service';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent {

  constructor(public modaleService: ModalServiceService,
              public taskService: TaskServiceService
    ){
  }
}
