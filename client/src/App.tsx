import React from "react"
import Home from "./pages/Home"
import GlobalStyle from "./globalStyles" /* Global Styles defined for the entire App*/
import ProductList from "./pages/ProductList"

function App() {
  return (
    <div>
      <GlobalStyle />
      <ProductList />
    </div>
  )
}

export default App
