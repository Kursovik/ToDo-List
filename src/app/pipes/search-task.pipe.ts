import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../molels/task';

@Pipe({
  name: 'searchTask'
})
//Pipe для фильтрации задач по id 
export class SearchTaskPipe implements PipeTransform {

  transform(tasks: ITask[],search: string): ITask[] {
    if(search.length === 0) return tasks
   return   tasks.filter(task =>
    task.id.toString().toLowerCase().includes(search.toLowerCase())
   )

  }
}
