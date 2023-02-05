import { Component } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  constructor(public modaleService: ModalServiceService,
    public taskService: TaskServiceService
){
}
}
