import React from "react"
import Navbar from "../Components/Home/Navbar/Navbar"
import Slider from "../Components/Home/Slider/Slider"
import Categories from "../Components/Home/Categories/Categories"
import Products from "../Components/Home/Products/Products"
import Newsletter from "../Components/Home/Newsletter/Newsletter"
import Footer from "../Components/Home/Footer/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
