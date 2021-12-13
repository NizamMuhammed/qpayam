import styled from "styled-components"
import { TopButtonProps } from "../../Components/Cart/CartContainer.helper"

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  font-weight: 200;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TopTexts = styled.div`
  display: flex;
  align-items: center;
`
const TopText = styled.h3`
  text-decoration: underline;
  margin: 0px 10px;
  cursor: pointer;
`
const Bottom = styled.div`
  display: flex;
  margin-top: 30px;
`
const TopButton = styled.button<TopButtonProps>`
  width: 15%;
  height: 40px;
  font-size: 20px;
  background-color: ${(props) =>
    props.fillType === "filled" ? "black" : "transparent"};
  color: ${(props) => props.fillType === "filled" && "white"};
  cursor: pointer;
`

const Info = styled.div`
  flex: 3;
`
const Summary = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 40px;
`
const Product = styled.div`
  display: flex;
`
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
`
const ProductName = styled.span`
  margin: 10px 0px;
`
const ProductId = styled.span`
  margin: 10px 0px;
`
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  background-color: yellow;
  border-radius: 50%;
`
const ProductSize = styled.span`
  margin: 10px 0px;
`
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
`
const Detail = styled.div`
  display: flex;
  margin: 0px 20px;
  flex-direction: column;
`
const ImageContainer = styled.div`
  max-height: 100px;
  max-width: 200px;
  padding: 20px;
`
const TotalContainer = styled.div`
  display: flex;
  align-items: center;
`
const Total = styled.div`
  font-size: 20px;
  margin: 5px;
`
const Cost = styled.h3`
  margin: 0px 20px;
  font-size: 30px;
`
const Partition = styled.hr``

const SummaryContainer = styled.div`
  height: 30vh;
  padding: 30px;
  border: 1px solid grey;
  width: 100%;
`

const SummaryOf = styled.span`
  font-size: 20px;
  font-weight: 300;
`

const SummaryTitle = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
`

const SummaryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`

const SummaryAmount = styled.span`
  font-size: 20px;
  font-weight: 300;
`

const SummaryDetail = styled.div``

export {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopTexts,
  TopText,
  TopButton,
  Partition,
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
  SummaryOf,
  SummaryContainer,
  SummaryTitle,
  SummaryItem,
  SummaryAmount,
  SummaryDetail,
}
