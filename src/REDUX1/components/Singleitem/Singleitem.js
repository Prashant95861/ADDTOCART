import React from 'react';

import { addToCart } from '../../Redux/Shopping/shopping-action';
import { connect } from 'react-redux';

const Singleitem = ({ currentItem,addToCart }) => {
    return (
        <>
            <div className="col-md-8 mx-auto mt-5">
                <div className="card i2pro">

                    <div className="ipro2left" style={{ width: '40%', float: 'left' }} >
                        <img src={`/${currentItem.img}`} style={{ width: '100%' }} />
                    </div>
                    <div className="ipro2right" style={{ width: '60%', float: 'right' }}>
                        <div className="row">
                            <div className="col-md-5 ipr22" >
                                <h6 className="mt-2" >{currentItem.name}</h6>
                                <p>{currentItem.description}</p>
                                <p>${currentItem.price}</p>
                                
                                    <button onClick={() => addToCart(currentItem.id)} style={{width:'7rem',height:'2rem',borderRadius:'11px',background:'black',color:'white'}} >
                                        Add To Cart
                                    </button>
                        
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

const mapStateToProps = (state) => {
    return{
        currentItem: state.shop.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Singleitem);
