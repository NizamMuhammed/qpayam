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
  margin: 10px 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
    background-color: lightgray;
    color: black;
  }
`
const Info = styled.div`
  opacity: 0;
`
const Image = styled.img`
  height: 75%;
`

const Container = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 20px;

  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${Image} {
    opacity: 0.5;
  }
`

export { Container, Image, Icon, Info }
