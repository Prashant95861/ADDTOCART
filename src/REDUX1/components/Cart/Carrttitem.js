import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';
import Cartdata from './Cartdata';

const Carrttitem = ({ cart }) => {

    const [totalPrice,setTotalPrice] = useState(0);
    const [totalItems,setTotalItems] = useState(0);

    useEffect(() => {

        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        })

    setTotalItems(items);
    setTotalPrice(price);   
    }, [cart,totalPrice,totalItems])

    return (
        <>
        
        <div className="container-fluid" >
        <div className="col-md-8 col-12 mx-auto">
        <div className="row">

            <div className="col-md-8 mx-auto mt-5 order-1 order-md-0">
                {
                   cart.map((item) => {
                       return <Cartdata
                           item={item}
                       />
                   })
                }
            </div>

            <div className="col-md-2 col-12 mx-auto mt-5 order-0 order-md-1">

                <div className="ipro33" >
                    <h4 className="text-center" >Cart Summary</h4>
                    <div style={{display:'flex',justifyContent:'space-around'}} >
                        <p>TOTAL: ({totalItems} item)</p>
                        <p>${totalPrice}</p>
                    </div>
                    <center><button>Proceed To Checkout</button></center>
                </div>

            </div>

        </div>   
        </div> 
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        cart: state.shop.cart 
    }
}

export default connect(mapStateToProps)(Carrttitem);
