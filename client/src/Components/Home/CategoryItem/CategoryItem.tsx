import React from "react"
import { itemProp } from "./CategoryItem.helper"
import {
  Container,
  Image,
  Info,
  Title,
  Button,
} from "../../../Styles/Home/CategoryItem/CategoryItem.style"

const CategoryItem = (item: itemProp) => {
  return (
    <Container>
      <Image src={item.item.img}></Image>
      <Info>
        <Title>{item.item.title}</Title>
        <Button>SHOP NOW!</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem
