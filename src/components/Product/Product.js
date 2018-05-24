import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class Product extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: '',
            price: '',
            image: '',
            quantity: '',

            products: {
                prod_name: '',
                price: '',
                image: '',
                quantity: '',
                prod_id: 0
            }
        }


//   handleChange(event) 
//     this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('quantity' + this.state.value);
    event.preventDefault();
  
  }
    

    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

       axios.post('/api/product', {
           name: this.state.name,
           price: this.state.price,
           image: this.state.image,
           quantity: this.state.quantity
       }).then((response) => {
           this.setState({ products: response.data[0] })
       }).catch(console.log);

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price, currency, image, quantity, isInCart } = this.props;
    
        return (
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">{price} {currency}</div>
                    <div className="product__quantity">{quantity} </div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={()=>this.handleClick()}

                        
        
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                <div>
        
                
        
                </div>
                        
             <label>
          <select value={this.state.value} onChange={this.handleChange}>
           <option value={1}>1</option>
           <option value={2}>2</option>                            
           <option value={3}>3</option>                            
           <option value={4}>4</option>                         
           <option value={5}>5</option>
           <option value={6}>6</option>
           <option value={7}>7</option> 
          </select>
            </label>
            
  
            </div>
                </div>
            </div>
           
        );
    
    }

PropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
 }

}
export default Product;
