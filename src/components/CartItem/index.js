import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import {Component} from 'react'

import CartContext from '../../context/CartContext'

import './index.css'

class CartItem extends Component {
 
  render() {
   

    return (
      <CartContext.Consumer>
        {value => {
          const {deleteCartItem, addCartItem} = value
          const {cartItemDetails} = this.props
          const {id, title, brand, quantity, price, imageUrl} = cartItemDetails
          const onDeleteCartItem = () => {
            deleteCartItem(id)
          }

          return (
            <li className="cart-item">
              <img className="cart-product-image" src={imageUrl} alt={title} />
              <div className="cart-item-details-container">
                <div className="cart-product-title-brand-container">
                  <p className="cart-product-title">{title}</p>
                  <p className="cart-product-brand">by {brand}</p>
                </div>
                <div className="cart-quantity-container">
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={this.onDecrementQuantity}
                  >
                    <BsDashSquare color="#52606D" size={12} />
                  </button>
                  <p className="cart-quantity">{quantity}</p>
                  <button
                    type="button"
                    className="quantity-controller-button"
                    onClick={this.onIncrementQuantity}
                  >
                    <BsPlusSquare color="#52606D" size={12} />
                  </button>
                </div>
                {
                  <div className="total-price-delete-container">
                    <p className="cart-total-price">Rs {price * quantity}/-</p>
                    <button
                      className="remove-button"
                      type="button"
                      onClick={onDeleteCartItem}
                    >
                      Remove
                    </button>
                  </div>
                }
              </div>
              <button
                className="delete-button"
                type="button"
                onClick={onDeleteCartItem}
              >
                <AiFillCloseCircle color="#616E7C" size={20} />
              </button>
            </li>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartItem
