import React from "react"
import Navbar from "../Components/Home/Navbar/Navbar"
import Slider from "../Components/Home/Slider/Slider"
import Categories from "../Components/Home/Categories/Categories"
import Products from "../Components/Home/Products/Products"
import Newsletter from "../Components/Home/Newsletter/Newsletter"
import Footer from "../Components/Home/Footer/Footer"
import { Container } from "../Styles/Home/Navbar/Navbar.style"

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Home
