import React from "react"
import { itemProp } from "./Product.helper"
import {
  Container,
  Image,
  Icon,
  Info,
} from "../../../Styles/ProductList/Product/Product.style"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import InfoIcon from "@mui/icons-material/Info"

const Product = (item: itemProp) => {
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

export default Product
