import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { TaskServiceService } from 'src/app/services/task-service.service';
import { ModalServiceService } from 'src/app/services/modal-service.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
//Компонент с формой в модальном окне для создания задачи
export class CreateTaskComponent {
  form  = new FormGroup({
    title: new FormControl<string>('',[
      Validators.required
    ]),
    date: new FormControl('',[
      Validators.required
    ])
  }
  )
  constructor(private taskService: TaskServiceService,
              private modalService: ModalServiceService
    ){
  }

  get title(){
    return this.form.controls.title as FormControl
  } 
  // Кнопка отправки формы и закрытия модального окна 
  submit(){
    this.taskService.create({
      id: this.taskService.tasks.length,
      title: this.form.value.title as string,
      createdAt: this.form.controls.date.value as string,
      completed: false,
      children:[]
    })
    this.modalService.closeCreate()
  }
}
