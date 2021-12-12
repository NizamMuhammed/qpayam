import styled from "styled-components"
import { IconProps } from "./Footer.helper"

const Container = styled.div`
  display: flex;
  padding: 20px;
`
const Left = styled.div`
  flex: 1;
  padding: 20px;
`
const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const Right = styled.div`
  flex: 1;
  padding: 20px;
`
const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
  padding-top: 10px;
`
const Description = styled.p`
  font-size: 16px;
`
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`
const SocialIcon = styled.div<IconProps>`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  color: white;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.h3`
  margin-bottom: 20px;
  width: 100%;
`

const CategoryList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
`

const CategoryItem = styled.li`
  margin-bottom: 10px;
`
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Title,
  CategoryList,
  CategoryItem,
  ContactItem,
}
