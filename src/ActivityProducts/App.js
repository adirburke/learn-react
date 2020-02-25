import React from 'react'
import productsData from "./vschoolProducts"
import Product from './Product.js'

function App() {
    const productComponents = productsData.map(product => <Product key={product.id} product={product} />)

    return (
        <div>
        {productComponents}
        </div>
    )
}


export default App