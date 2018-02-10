import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {IMessageModel} from './IMessageModel';
import {Observable} from 'rxjs/Observable';

/**
 * Based on http://www.processinginfinity.com/weblog/2016/08/18/MessageBus-Pattern-in-Angular2-TypeScript.
 */
@Injectable()
export class MessagingService {

  private message$: Subject<IMessageModel>;

  constructor() {
    this.message$ = new Subject<IMessageModel>();
  }

  public publish<T>(message: T): void {
    const channel = (<any>message.constructor).name;
    this.message$.next({channel: channel, data: message});
  }

  public of<T>(messageType: { new(...args: any[]): T }): Observable<T> {
    const channel = (<any>messageType).name;

    return this.message$
      .filter(m => m.channel === channel)
      .map(m => m.data);
  }

}
