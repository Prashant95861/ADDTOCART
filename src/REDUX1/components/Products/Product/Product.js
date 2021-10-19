import React from 'react';
import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { addToCart,loadCurrentItem } from '../../../Redux/Shopping/shopping-action';

const Product = ({ product,addToCart,loadCurrentItem }) => {
    console.log("props",product);
    return (
        <>
            <div className="col-md-8 mx-auto mt-5">
                <div className="card ipro">

                    <div className="iproleft" style={{ width: '40%', float: 'left' }} >
                        <img src={product.img} style={{ width: '100%' }} />
                    </div>
                    <div className="iproright" style={{ width: '60%', float: 'right' }}>
                        <div className="row">
                            <div className="col-md-5 ipr1" >
                                <h6 className="mt-2" >{product.name}</h6>
                                <p className="prd" >{product.description}</p>
                                <p className="pri" >${product.price}</p>
                            </div>
                            <div className="col-md-5 ipr2" >
                                <NavLink to={`/product/${product.id}`}>
                                    <button onClick={() => loadCurrentItem(product)} style={{width:'7rem',height:'2rem',borderRadius:'11px',}} >
                                        View Item
                                    </button>
                                </NavLink>
                                    <button onClick={() => addToCart(product.id)} style={{width:'7rem',height:'2rem',borderRadius:'11px',background:'black',color:'white'}} >
                                        Add To Cart
                                    </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null,mapDispatchToProps)(Product);
