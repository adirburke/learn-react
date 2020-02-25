import React from 'react'

function Product(props) {
    return (
        <div>
            <h3>{props.product.name}</h3>
            <h5>{props.product.price.toLocaleString("en-AU", {style: "currency", currency: "AUD"})}</h5>
            <p>{props.product.description}</p>
        </div>
    )
}


export default Product 