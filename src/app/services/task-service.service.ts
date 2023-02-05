import { Injectable } from '@angular/core';
import { tasksJson } from '../data/tasks';
import { ITask } from '../molels/task';

@Injectable({
  providedIn: 'root'
})
//Сервис для взаимодействия массива задач с компонентами 
export class TaskServiceService {
  tasks:ITask[] = tasksJson
  index:number
//Создание задачи
  create(task:ITask){
    this.tasks.push(task)
  }
// Удаление задачи из списка
  delete(task:ITask){
    const index =this.tasks.indexOf(task)
    if(index > -1 ) this.tasks.splice(index,1)
  }
//Изменение конкретной задачи
  edit(task:ITask){
    if(this.index > -1 ) this.tasks.splice(this.index,1,task)
    console.log(this.tasks)
  }
}
