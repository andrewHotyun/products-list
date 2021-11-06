import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AllProducts from "./components/AllProducts"
import Cart from "./components/Cart"
import { CartProvider } from "react-use-cart"

function App() {
  return (
    <div style={{backgroundImage:"./img/look.com.ua-54912.jpg"}}>
    <CartProvider>
      <AllProducts />
      <Cart />
    </CartProvider>
    </div>
  )
}
export default App