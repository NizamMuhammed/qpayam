import React from "react"
import {
  Wrapper,
  ImageContainer,
  Img,
  Price,
  Title,
  InfoContainer,
  Description,
} from "./ProductInfo.style"
import ProductFilters from "./ProductFilter"
import AddRemove from "./AddRemove"

const ProductPage = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <Img src="https://images-eu.ssl-images-amazon.com/images/I/91-fa7AVCzL._AC._SR360,460.jpg" />
      </ImageContainer>
      <InfoContainer>
        <Title>Polo Regular Boys T-Shirt</Title>
        <Description>
          Sample Description.Sample Description.Sample Description.Sample
          Description.Sample Description.Sample Description.Sample
          Description.Sample Description.Sample Description.Sample
          Description.Sample Description.Sample Description.Sample
          Description.Sample Description.Sample Description.Sample Description.
        </Description>
        <Price>Rs. 399</Price>
        <ProductFilters />
        <AddRemove />
      </InfoContainer>
    </Wrapper>
  )
}

export default ProductPage
