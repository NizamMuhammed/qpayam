import React from "react"
import Navbar from "../components/Navbar/Navbar"
import FilterCategory from "../components/FilterCategory/FilterCategory"
import Products from "../components/Products/Products"
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <FilterCategory />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default ProductList
