import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {
  form  = new FormGroup({
    title: new FormControl<string>('',[
      Validators.required
    ]),
    date: new FormControl('',[
      Validators.required
    ])
  }
  )
  constructor(public taskService: TaskServiceService,
              private modalService: ModalServiceService
    ){
      
     
  }

  get title(){
    return this.form.controls.title as FormControl
  } 
  // Кнопка отправки формы и закрытия модального окна 
  submit(){
    this.taskService.edit({
      id: this.taskService.tasks.length,
      title: this.form.value.title as string,
      createdAt: this.form.controls.date.value as string,
      completed: false,
      children:[]
    })
    this.modalService.closeEdit()
    console.log(this.taskService.tasks)
  }
  
}
