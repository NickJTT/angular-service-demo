import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  private teacherMessageSource: Subject<string> = new Subject<string>();
  public teacherMessage$: Observable<string> = this.teacherMessageSource.asObservable();

  public sendMessage(message: string) {
    this.teacherMessageSource.next(message);
  }
}
