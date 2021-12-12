import styled from "styled-components"

const Container = styled.div`
  height: 30vh;
  background-color: #84dfff;
  padding: 20px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  flex-direction: column;
`

const Description = styled.div`
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 20px;
`
const Title = styled.h1`
  font-size: 50px;
  margin: 20px;
`
const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid grey;
`
const Input = styled.input`
  border: none;
  padding-left: 20px;
  flex: 8;
  font-size: 16px;
`
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: white;
  border: none;
  height: 100%;
`

export { Container, Description, Wrapper, Title, Button, Input, InputContainer }
