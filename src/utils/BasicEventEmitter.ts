/* eslint-disable @typescript-eslint/no-explicit-any */
export class BasicEventEmitter {

  listeners = new Map<string, Map<(...args: any[]) => void, { once: boolean }>>();

  #prepareListenersMap = (eventName: string): void => {
    if (!this.listeners.has(eventName)) this.listeners.set(eventName, new Map());
  }

  on(eventName: string, listener: (...args: any[]) => void): void {
    this.#prepareListenersMap(eventName);
    this.listeners.get(eventName)?.set(listener, {once: false});
  }

  once(eventName: string, listener: (...args: any[]) => void): void {
    this.#prepareListenersMap(eventName);
    this.listeners.get(eventName)?.set(listener, { once: true });
  }

  off(eventName?: string, listener?: ((...args: any[]) => void)): any {
    if (!eventName) return this.listeners = new Map();
    if (!listener) return this.listeners.delete(eventName);
    this.listeners.get(eventName)?.delete(listener)
  }

  emit(eventName: string, ...args: any[]): void {
    if (!this.listeners.has(eventName)) return;
    const eventMap = this.listeners.get(eventName);
    eventMap?.forEach(({ once }, listener) => {
      if (once) eventMap.delete(listener);
      listener(...args);
    });
  }
}