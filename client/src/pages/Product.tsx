import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"
import ProductPage from "../components/ForPages/Product/ProductInfo"

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
