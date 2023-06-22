import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LgModalService {
  private states: Map<string, BehaviorSubject<boolean>> = new Map();

  // Called onInit of the modal
  add(id: string): void {
    this.states.set(id, new BehaviorSubject(undefined));
  }

  // Called onDestroy of the modal
  remove(id: string): void {
    this.close(id);
    this.states.delete(id);
  }

  open(id: string): void {
    this.states.get(id).next(true);
  }

  close(id: string): void {
    this.states.get(id).next(false);
  }

  isOpen$(id: string): Observable<boolean> {
    if (!this.states.has(id)) {
      this.add(id);
    }

    return this.states.get(id);
  }
}
