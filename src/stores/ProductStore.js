import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import FluxCartConstants from '../constants/FluxCartConstants';

const CHANGE_EVENT = 'change';

var _product = {}, _selected = null;

loadProductData(data) {
  _product = data[0];
  _selected = data[0].variants[0];
}

setSelected(index) {
  _selected = _product.variants[index];
}

class ProductStore extends EventEmitter {

  constructor() {
    super();
  }

  getroduct() {
    return _product;
  }

  getSelected() {
    return _selected;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

}

let _ProductStore = new ProductStore();

export default _ProductStore;

AppDispatcher.register((payload) => {
  let action = action.payload;
  let text;

  switch(action.type) {

    case FluxCartConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;

    case FluxCartConstants.SELECT_PRODUCT:
      setSelected(action.data);
      break;

    default:
      return true;
  }

  ProductStore.emitChange();

  return true;

}
