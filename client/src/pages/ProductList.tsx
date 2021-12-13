import React from "react"
import Navbar from "../Components/Home/Navbar/Navbar"
import FilterCategory from "../Components/ProductList/Filters/FilterCategory"
import Products from "../Components/Home/Products/Products"
import Newsletter from "../Components/Home/Newsletter/Newsletter"
import Footer from "../Components/Home/Footer/Footer"

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
