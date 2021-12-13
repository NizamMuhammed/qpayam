import React from "react"
import Home from "./Pages/Home"
import GlobalStyle from "./globalStyles" /* Global Styles defined for the entire App*/
import Login from "./Pages/Login"
import ProductList from "./Pages/ProductList"
import Product from "./Pages/Product"

function App() {
  return (
    <div>
      <GlobalStyle />
      <Login />
      <Home />
      <ProductList />
      <Product />
    </div>
  )
}

export default App
