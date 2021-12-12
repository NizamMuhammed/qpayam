import React from "react"
import { itemProp } from "./ProductListItem.helper"
import { Container, Image, Icon, Info } from "./ProductListItem.style"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import InfoIcon from "@mui/icons-material/Info"

const ProductListItem = (item: itemProp) => {
  return (
    <Container>
      <Image src={item.item.img}></Image>
      <Info>
        <Icon>
          <ShoppingCartIcon />
        </Icon>
        <Icon>
          <InfoIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductListItem
