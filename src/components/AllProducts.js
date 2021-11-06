import React from "react"
import ProductCard from "./ProductCard"
import products from "./Products";

const AllProducts = () => { 
  return (
    <div>
        <h1 className="text-center mt-3">All Products</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    { 
                    products.productData.map((product, index) => {
                            return(
                                <ProductCard 
                                img={product.img}
                                title={product.title}
                                price={product.price} 
                                product={product} 
                                key={index}
                                />
                            )
                        })}
                </div>
            </section>
    </div>
  );
};
export default AllProducts;