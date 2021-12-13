import React from "react"
import {
  Container,
  Title,
  Wrapper,
  Input,
  Form,
  Button,
  Forgot,
  Create,
} from "../../Styles/Login/LoginContainer.style"

const LoginContainer = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username/EmailID"></Input>
          <Input placeholder="Password"></Input>
        </Form>
        <Button>Sign In</Button>
        <Forgot>Forgot Password?</Forgot>
        <Create>Create new Account</Create>
      </Wrapper>
    </Container>
  )
}

export default LoginContainer
