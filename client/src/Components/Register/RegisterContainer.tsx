import React from "react"
import {
  Container,
  Title,
  Wrapper,
  Input,
  Form,
  Button,
} from "../../Styles/Register/RegisterContainer.style"

const RegisterContainer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE ACCOUNT</Title>
        <Form>
          <Input placeholder="First Name"></Input>
          <Input placeholder="Second Name"></Input>
          <Input placeholder="Email ID"></Input>
          <Input placeholder="Create Password"></Input>
          <Input placeholder="Confirm Passwrod"></Input>
        </Form>
        <Button>CREATE</Button>
      </Wrapper>
    </Container>
  )
}

export default RegisterContainer
