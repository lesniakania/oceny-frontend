import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

class BaseStore extends EventEmitter {
  addChangeListener(listener, context) {
    this.on(CHANGE_EVENT, listener, context);
  }

  removeChangeListener(listener, context) {
    this.removeListener(CHANGE_EVENT, listener, context);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

export default BaseStore;
