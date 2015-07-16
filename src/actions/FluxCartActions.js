import AppDispatcher from '../dispatcher/AppDispatcher';
import FluxCartConstants from '../constants/FluxCartConstants';

export default {
  receiveProduct: (data) => {
    AppDispatcher.handleAction({
      type: FluxCartConstants.RECEIVE_DATA,
      data: data
    });
  },

  selectProduct: (index) => {
    AppDispatcher.handleAction({
      type: FluxCartConstants.SELECT_PRODUCT,
      data: index
    });
  },

  addToCart: (sku, update) => {
    AppDispatcher.handleAction({
      type: FluxCartConstants.CART_ADD,
      sku: sku,
      update: update
    });
  },

  removeFromCart: (sku) => {
    AppDispatcher.handleAction({
      type: FluxCartConstants.CART_REMOVE,
      sku: sku
    });
  },

  updateCartVisible: (cartVisible) => {
    AppDispatcher.handleAction({
      type: FluxCartConstants.CART_VISIBLE,
      cartVisible: cartVisible
    });
  }
}
