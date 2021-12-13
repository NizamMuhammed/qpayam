import React from "react"
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopTexts,
  TopText,
  TopButton,
  Info,
  Product,
  ProductDetail,
  ProductName,
  ProductColor,
  ProductId,
  ProductSize,
  Summary,
  PriceDetail,
  Image,
  Detail,
  ImageContainer,
  TotalContainer,
  Total,
  Cost,
  Partition,
  SummaryOf,
  SummaryContainer,
  SummaryTitle,
  SummaryItem,
  SummaryAmount,
  SummaryDetail,
} from "../../Styles/Cart/CartContainer.style"
import Navbar from "../../Components/Home/Navbar/Navbar"
import Footer from "../../Components/Home/Footer/Footer"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

const CartContainer = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Your Bag(2)</TopText>
            <TopText>Favourites(0)</TopText>
          </TopTexts>
          <TopButton fillType="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <ImageContainer>
                  <Image src="https://images.asics.com/is/image/asics/2184A001_753_FK_FT_GLB?$zoom$" />
                </ImageContainer>
                <Detail>
                  <ProductName>
                    <b>Product:</b> Polo T-shirt
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> n1
                  </ProductId>
                  <ProductColor />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <TotalContainer>
                  <AddIcon style={{ fontSize: "20px", cursor: "pointer" }} />
                  <Total>1</Total>
                  <RemoveIcon style={{ fontSize: "20px", cursor: "pointer" }} />
                </TotalContainer>
                <Cost>Rs. 399</Cost>
              </PriceDetail>
            </Product>
            <Partition />
            <Product>
              <ProductDetail>
                <ImageContainer>
                  <Image src="https://images.asics.com/is/image/asics/2184A001_753_FK_FT_GLB?$zoom$" />
                </ImageContainer>
                <Detail>
                  <ProductName>
                    <b>Product:</b> Polo T-shirt Girl
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> n2
                  </ProductId>
                  <ProductColor />
                  <ProductSize>
                    <b>Size:</b> XS
                  </ProductSize>
                </Detail>
              </ProductDetail>
              <PriceDetail>
                <TotalContainer>
                  <AddIcon style={{ fontSize: "20px", cursor: "pointer" }} />
                  <Total>2</Total>
                  <RemoveIcon style={{ fontSize: "20px", cursor: "pointer" }} />
                </TotalContainer>
                <Cost>Rs. 299</Cost>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryContainer>
              <SummaryTitle>Price Details</SummaryTitle>
              <SummaryDetail>
                <SummaryItem>
                  <SummaryOf>Item Cost:</SummaryOf>
                  <SummaryAmount>698</SummaryAmount>
                </SummaryItem>
                <SummaryItem>
                  <SummaryOf>Shipping Cost:</SummaryOf>
                  <SummaryAmount>50</SummaryAmount>
                </SummaryItem>
                <SummaryItem>
                  <SummaryOf>Shipping Discount:</SummaryOf>
                  <SummaryAmount>-50</SummaryAmount>
                </SummaryItem>
                <Partition />
                <SummaryItem>
                  <SummaryOf>
                    <b>Total:</b>
                  </SummaryOf>
                  <SummaryAmount>
                    <b>698</b>
                  </SummaryAmount>
                </SummaryItem>
              </SummaryDetail>
            </SummaryContainer>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default CartContainer
