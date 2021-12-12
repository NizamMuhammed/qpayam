/*
 * Component used in a Page
 * Hence, given the '.page' extension naming convention
 */

import React from "react"
import {
  Wrapper,
  ImageContainer,
  Img,
  Price,
  Title,
  InfoContainer,
  Description,
} from "./Product.page.style"
import ProductFilters from "../Filters/Product.page"
import AddRemove from "../AddRemove/AddRemove"

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
