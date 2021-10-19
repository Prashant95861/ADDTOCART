import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeToCart,adjustQty } from '../../Redux/Shopping/shopping-action';

const Cartdata = ({ item,removeToCart,adjustQty }) => {

    const [input,setInput] = useState(item.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value);
    }

    return (
        <>
            <div className="card ipro3">

                <div className="ipro3left" style={{ width: '40%', float: 'left' }} >
                    <img src={item.img} style={{ width: '100%' }} />
                </div>
                <div className="ipro3right" style={{ width: '60%', float: 'right' }}>
                    <div className="row">
                        <div className="col-md-5 ipr3" >
                            <h6>{item.name}</h6>
                            <p className="capda" >{item.description}</p>
                            <p className="capri" >${item.price}</p>
                        </div>
                        <div className="col-md-5 ipr233" >
                            Qty:
                            <input type="number" min="1" name="qty" value={input} onChange={onChangeHandler} />
                            <div>
                                <i onClick={() => removeToCart(item.id)} className="fa fa-trash" ></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div><br />
        </>
    )
};

const mapDispatchToProps = (dispatch) => {
    return{
        removeToCart: (id) => dispatch(removeToCart(id)),
        adjustQty: (id,value) => dispatch(adjustQty(id,value))
    }
}

export default connect(null,mapDispatchToProps)(Cartdata);
