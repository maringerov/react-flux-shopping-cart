import React, { Component } from 'react';
import CartStore from '../stores/CartStore';
import ProductStore from '../stores/ProductStore';
import Product from './Product';
import Cart from './Cart';

getCartState() {
  return: {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible()
  };
}

export default class CartApp extends Component {

  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = getCartState();
  }

  _onChange() {
    this.setState(getCartState);
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div className="flux-cart-app">
        <Cart
          products={this.state.cartItems}
          count={this.state.cartCount}
          total={this.state.cartTotal}
          visible={this.state.cartVisible} />
        <Product
          product={this.state.product}
          cartitems={this.state.cartItems}
          selected={this.state.selectedProduct} />
      </div>
    );
  }

}
