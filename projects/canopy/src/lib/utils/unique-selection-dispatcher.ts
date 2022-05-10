import { Injectable, OnDestroy } from '@angular/core';

export type UniqueSelectionListener = (key: string, context: string) => void;

@Injectable({ providedIn: 'root' })
export class UniqueSelectionDispatcher implements OnDestroy {
  private _listeners: Array<UniqueSelectionListener> = [];

  ngOnDestroy(): void {
    this._listeners = [];
  }

  /**
   * Adds a listener function to be notified of unique selection events. Can be used to track active states across
   * sibling components in the same context (Accordion items, Menus, Navigation items, Custom inputs etc)
   *
   * @param listener -
   * The UniqueSelectionListener function to add
   *
   * @return a function to remove the applied listener when called
   *
   * @example
   *     dispatcher.listen((key: string, context: string) => {
   *       if (key !== this._id && context === this._menuContext) {
   *         this.isActive = false;
   *       }
   *     })
   */
  listen(listener: UniqueSelectionListener): () => void {
    this._listeners.push(listener);

    return () => {
      this._listeners = this._listeners.filter(l => l !== listener);
    };
  }

  /**
   * Notifies all listeners of the unique selection event in a context.
   *
   * @param id -
   * The id of the item selected
   * @param context -
   * The selection event context
   *
   * @example
   *     dispatcher.notify(this._id, this._menuContext);
   */
  notify(id: string, context: string): void {
    this._listeners.forEach(listener => listener(id, context));
  }
}
