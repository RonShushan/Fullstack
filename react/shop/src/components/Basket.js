import React, { Component } from 'react';

class Basket extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
        <div>
            {this.props.basket.map(product=>
                <div key={product.id}>
                    <div> {product.name} - <span>{product.price} ש"ח - {product.qnt} </span></div>
                    <hr style={{background:'black'}}/>
                </div>)}
        </div> );
    }
}
 
export default Basket;