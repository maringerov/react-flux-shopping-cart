import React, { Component } from 'ract';
import FluxCartActions from '../actions/FluxCartActions';

export default class Product extends from Component {
  constructor(props) {
    super(props);
    const { props: {
      product: ,
      cartitems: ,
      selected:
    } } = this
  }

  addToCart(event) {
    let sku = this.selected.sku;
    let update = {
      name: this.product.name,
      type: this.selected.type,
      price: this.selected.price
    }
    FluxCartActions.addToCart(sku, update);
    FluxCartActions.updateCartVisible(true);
  }

  selectVariant(event) {
    FluxCartActions.selectedProduct(event.target.value);
  }

  render() {
    let ats = (this.selected.sku in this.cartitems) ?
      this.selected.inventory - this.cartitems[this.selected.sku].quantity :
      this.selected.inventory;
    return (

    );
  }

};

Product.propTypes = {
  product: React.PropTypes.string,
  cartitems: React.PropTypes.number
};

Product.defaultProps = {

};
