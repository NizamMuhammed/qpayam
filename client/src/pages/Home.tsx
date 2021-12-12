import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Slider from "../components/Slider/Slider"
import Categories from "../components/Categories/Categories"
import ProductList from "../components/ProductList/ProductList"
import Newsletter from "../components/Newsletter/Newsletter"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
      <Newsletter />
    </div>
  )
}

export default Home
