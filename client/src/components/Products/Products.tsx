import React from "react"
import { productList } from "./Products.helper"
import { Container, Wrapper } from "./Products.style"
import Product from "../Product/Product"

const Products = () => {
  return (
    <Wrapper>
      <h1>PRODUCT LIST</h1>
      <Container>
        {productList.map((item) => {
          return <Product item={item} key={item.id} />
        })}
      </Container>
    </Wrapper>
  )
}

export default Products
