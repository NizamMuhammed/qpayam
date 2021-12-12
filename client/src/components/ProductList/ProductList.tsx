import React from "react"
import { productList } from "./ProductList.helper"
import { Container, Wrapper } from "./ProductList.style"
import ProductListItem from "../ProductListItem/ProductListItem"

const ProductList = () => {
  return (
    <Wrapper>
      <h1>PRODUCT LIST</h1>
      <Container>
        {productList.map((item) => {
          return <ProductListItem item={item} key={item.id} />
        })}
      </Container>
    </Wrapper>
  )
}

export default ProductList
