import { Injectable, signal } from '@angular/core';
import { Action } from '../models/action';

@Injectable({
  providedIn: 'root',
})
export class MessageQueueSignalService {
  private actionSignal = signal<Action | null>(null); // Signal pour stocker la dernière action

  // Méthode pour dispatcher une action
  dispatch(action: Action) {
    this.actionSignal.set(action); // Met à jour le signal avec l'action envoyée
  }

  // Getter pour accéder à l'action actuelle
  get action() {
    return this.actionSignal;
  }
}
