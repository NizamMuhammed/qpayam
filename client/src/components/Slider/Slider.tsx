/*
 * Slider template used in HomePage
 *
 * 'mui' / Material UI library is used for Icons
 * Arrow Icons are imported from the library
 */

import React, { useState } from "react"
import {
  Container,
  Arrow,
  Slide,
  Wrapper,
  ImgContainer,
  InfoContainer,
  Image,
  Title,
  Button,
  Description,
} from "./Slider.style"
import { SlideItems } from "./Slider.helper"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

const Slider = () => {
  //State variable to handle position of the slides
  const [slideIndex, setSlideIndex] = useState(0)

  //Function handling the onClick behaviour for slide change
  const handleClick = (direction: string) => {
    if (direction === "right") {
      slideIndex < 2 ? setSlideIndex(slideIndex + 1) : setSlideIndex(0)
    } else {
      slideIndex > 0 ? setSlideIndex(slideIndex - 1) : setSlideIndex(2)
    }
  }

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left")
        }}
      >
        <ArrowBackIosNewIcon />
      </Arrow>
      <Wrapper sliderIndex={slideIndex}>
        {SlideItems.map((item) => (
          <Slide bg="white" key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>{item.buttonText}</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right")
        }}
      >
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  )
}

export default Slider
