import './cart.css'
import React from 'react'

function Card(props) {
    // console.log(props)
    const cart = props.cart
    
    let total = 0;
    let name = ''
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        name = ` ${name}  ${element.last_name},`
        total = total + element.transfer_fee
    }
    
    return (
        <div>
            <h3>Transfer Market</h3>
            <h4>Add Total player : {cart.length}</h4>
            <p>Names : {name}</p>
            <p>Total Cost : m<span>&#8364;</span> {total}</p>
        </div>
    )
}
export default Card