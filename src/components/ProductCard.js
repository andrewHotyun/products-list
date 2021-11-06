import React from "react"
import { useCart } from "react-use-cart"
import "./Style.css"

const ProductCard = (props) => {
  const { addItem } = useCart();
  return (
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow">
          <img src={props.img} alt="/" className="card-img-top img fluid"/>
            <div className="card-body text-center">
              <h5 className="card-title">{props.title}</h5>
              <h5 className="card-title">{props.price}$</h5>
              <button className="btn btn-success"
              onClick={() => addItem(props.product)}
              >Add to Cart</button>
            </div>
        </div>
      </div>
     );
};
export default ProductCard;