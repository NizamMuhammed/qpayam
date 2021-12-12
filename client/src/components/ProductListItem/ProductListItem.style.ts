import styled from "styled-components"

const Icon = styled.div`
  color: white;
  background-color: grey;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  opacity: 0;
  cursor: pointer;
`
const Container = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;

  &:hover ${Icon} {
    opacity: 1;
  }
`
const Image = styled.img`
  height: 75%;
`

export { Container, Image, Icon }
