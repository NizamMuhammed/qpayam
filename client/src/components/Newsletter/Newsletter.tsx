import React from "react"
import {
  Container,
  Wrapper,
  Title,
  Description,
  Button,
  Input,
  InputContainer,
} from "./Newsletter.style"
import SendIcon from "@mui/icons-material/Send"

const Newsletter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Newsletter</Title>
        <Description>Get timely Updates!</Description>
        <InputContainer>
          <Input placeholder="Your Email ID" />
          <Button>
            <SendIcon />
          </Button>
        </InputContainer>
      </Wrapper>
    </Container>
  )
}

export default Newsletter
