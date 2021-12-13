import React from "react"
import Navbar from "../Components/Home/Navbar/Navbar"
import Newsletter from "../Components/Home/Newsletter/Newsletter"
import Footer from "../Components/Home/Footer/Footer"
import ProductPage from "../Components/Product/ProductInfo"

const Product = () => {
  return (
    <div>
      <Navbar />
      <ProductPage />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Product
