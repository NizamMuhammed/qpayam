import styled from "styled-components"
import { ArrowProps, SlideProps, WrapperProps } from "./Slider.helper"

const Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div<ArrowProps>`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  opacity: 0.3;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`
const Wrapper = styled.div<WrapperProps>`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.sliderIndex * -100}vw);
  transition: all 1.5s ease;
`
const Slide = styled.div<SlideProps>`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 70vh;
  background-color: ${(props) => props.bg};
`

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  text-align: center;
`
const Image = styled.img`
  height: 100%;
`

const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`
const Title = styled.h1`
  font-size: 70px;
`
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

export {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  InfoContainer,
  Image,
  Title,
  Description,
  Button,
}
