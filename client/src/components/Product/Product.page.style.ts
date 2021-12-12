import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`
const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Img = styled.img`
  width: 50vh;
  height: 50vh;
  object-fit: cover;
`
const Price = styled.span`
  font-size: 40px;
  font-weight: bolder;
`
const Description = styled.p``
const Title = styled.h1`
  font-weight: 200;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`

export {
  Wrapper,
  ImageContainer,
  Img,
  Price,
  Description,
  Title,
  InfoContainer,
}
