import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Slider from "../components/Slider/Slider"
import Categories from "../components/Categories/Categories"
import ProductList from "../components/ProductList/ProductList"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
    </div>
  )
}

export default Home
