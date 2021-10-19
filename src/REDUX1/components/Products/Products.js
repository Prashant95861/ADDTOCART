import React from 'react';
import { connect } from 'react-redux';
import Product from './Product/Product';

const Products = ({ products }) => {
    console.log("products",products);
    return (
        <>
          {
              products.map((prod) => {
                  return <Product
                      product={prod}
                  />
              })
          }
        </>
    )
}

const mapStateToProps = state => ({
    products: state.shop.products,
})
 
export default connect(mapStateToProps)(Products);
