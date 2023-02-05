import { Component, Input } from '@angular/core';
import { tasksJson } from 'src/app/data/tasks';
import { ITask } from 'src/app/molels/task';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { TaskServiceService } from 'src/app/services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  //Уникальный id  для каждого компонента
 
  //Получение отдельной задачи из массива tasks
  @Input() task : ITask
  constructor(public taskService: TaskServiceService,
                public modalService : ModalServiceService
    ){
    
  }
  //удаление задачи с помощью сервиса по id компонента
  deleteTask(){
    console.log()
    this.taskService.delete(this.task)
  }
  editTask(){
    this.taskService.index = this.taskService.tasks.indexOf(this.task)
    this.modalService.openEdit()
  }
}
