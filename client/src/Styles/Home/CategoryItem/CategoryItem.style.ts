import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  margin-right: 20px;
`
const Button = styled.button`
  background: transparent;
  border: none;
  padding: 10px;
  background-color: grey;
  color: white;
  cursor: pointer;
  font-weight: 600;
`

export { Container, Image, Info, Title, Button }
