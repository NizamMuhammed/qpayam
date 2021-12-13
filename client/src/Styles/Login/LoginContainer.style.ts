import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  left: 0;
  top: 0;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(240, 233, 210, 0.7),
      rgba(230, 221, 196, 0.5)
    ),
    url(https://www.teahub.io/photos/full/86-866571_background-full-hd-1080p-background-images-hd-download.jpg);
`
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  height: 40%;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  align-items: center;
  justify-content: center;
`

const Input = styled.input`
  width: 100%;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border-color: lightgray;
`

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 10px;
  font-size: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 5px;
`

const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
`
const Forgot = styled.a`
  color: red;
  font-size: 14px;
  padding-right: 10px;
  cursor: pointer;
  margin: 10px;
  text-decoration: underline;
`

const Create = styled.a`
  color: teal;
  font-size: 14px;
  padding-right: 10px;
  cursor: pointer;
  text-decoration: underline;
`

export { Container, Title, Wrapper, Input, Form, Button, Forgot, Create }
