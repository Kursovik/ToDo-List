import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Сервис для открытия и закрытия модального окна
export class ModalServiceService {

  isVisibleCreate$ = new BehaviorSubject<boolean>(false)
  isVisibleEdit$ = new BehaviorSubject<boolean>(false)

  openCreate(){
    this.isVisibleCreate$.next(true)
  }
  closeCreate(){
    this.isVisibleCreate$.next(false)
  }
  openEdit(){
    this.isVisibleEdit$.next(true)
  }
  closeEdit(){
    this.isVisibleEdit$.next(false)
  }
}
