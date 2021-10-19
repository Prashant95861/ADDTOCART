import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = ({ cart }) => {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });
        
        setCartCount(count);
    },[cart,cartCount])

    return (
        <>
            <div style={{display:'flex'}} className="itenav" >

                <NavLink to="/" className="itemnav" >
                    <h3 className="text-light mt-2" >Redux Shopping Cart</h3>
                </NavLink>


                <NavLink to="/cart" className="itemnav2">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="inav" >
                        <h3>cart</h3>
                        <i className="fa fa-shopping-cart pl-2" ></i>
                        <span className="ml-2" ><h6>{cartCount}</h6></span>
                    </div>
                </NavLink>

            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return{
        cart: state.shop.cart 
    }
}

export default connect(mapStateToProps)(Navbar);
