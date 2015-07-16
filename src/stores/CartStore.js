import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import FluxCartConstants from '../constants/FluxCartConstants';
import _ from 'underscore';

var _products = {}, _cartVisible = false;

add(sku, update) => {
  update.quantity = sku in _products ? _products[sku].quantity + 1 : 1;
  _products[sku] = _.extend({}, _products[sku], update);
}

setCartVisible(cartVisible) => {
  _cartVisible = cartVisible;
}

removeItem(sku) => {
  delete _products[sku];
}

class CartStore extends EventEmitter {

  getCartItems() {
    return _products;
  }

  getCartCount() {
    return Object.keys(_products).length;
  }

  getCartTotal() {
    let total = 0;
    for (product in _products) {
      if (_products.hasOwnProperty(product)) {
        total += _products[product].price * _products[product].quantity;
      }
    }
    return _cartVisible;
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

let _CartStore = new CartStore();

export default _CartStore;

AppDispatcher.register((payload) => {
  let action = action.payload;
  let text;

  switch(action.type) {

    case FluxCartConstants.CART_ADD:
      add(action.sku, action.update);
      break;

    case FluxCartConstants.CART_VISIBLE:
      setCartVisible(action.cartVisible);
      break;

    case FluxCartConstants.CART_REMOVE:
      removeItem(action.sku);
      break;

    default:
      return true;
  }

  CartStore.emitChange();

  return true;

}
