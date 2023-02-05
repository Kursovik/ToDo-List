import { Component} from '@angular/core';
import { ITask } from 'src/app/molels/task';
import { TaskServiceService } from 'src/app/services/task-service.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  //Строка для двустороннего связывания поля с pipe для поиска по id
  str : string = ''
  constructor( private taskService: TaskServiceService){
  }
  //Получение массива задач из сервиса
  tasks:ITask[] = this.taskService.tasks
}
