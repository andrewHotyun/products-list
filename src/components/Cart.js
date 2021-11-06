import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems, 
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
     } = useCart();

     if (isEmpty) return <h1 className="text-center">Your Cart is Empty!</h1>

    return (
        <section className="py-4" style={{margin:" 0px 12px 0px 12px"}}>    
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5 className="text-center" style={{margin: "25px"}}>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                    <table className="table table-light table hover m-0">
                        <tbody> 
                            {items.map((product, index) => {
                                return (
                                    <tr key = {index}>
                                        <td>
                                            <img src={product.img} alt="/" style={{height: '6rem'}}/>
                                        </td>
                                        <td style={{marginRight:"320px"}}>{product.title}</td>
                                        <td>{product.price}$</td>
                                        <td>Quantity ({product.quantity})</td>
                                        <td>
                                            <button className="btn btn-info ms-2" 
                                            onClick={() => 
                                            updateItemQuantity(product.id, product.quantity - 1)}>-</button>
                                            <button className="btn btn-info ms-2" 
                                            onClick={() => {
                                                if (product.id === 3 && product.quantity > 1){
                                                    product.originalPrice = 10
                                                    console.log(product.originalPrice + " price 2" + product.price);
                                                    product.price = 10 * 50  / 100
                                                    // product.price = 0.20 * 25
                                                }
                                                updateItemQuantity(product.id, product.quantity + 1)
                                                
                                            }
                                             }>+</button>
                                            <button className="btn btn-danger ms-2" style={{marginRight:"-185px"}}
                                            onClick={() => removeItem (product.id)}>Remove Product </button>
                                        </td>

                                    </tr>
                                )    
                        })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">       
                 <h2 className="text-center" style={{marginTop:"7px"}}>Total Price: {cartTotal}$</h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2"
                    onClick={() => emptyCart()}>Clear Cart</button>
                </div>
            </div>
        </section>
    )
};


export default Cart;