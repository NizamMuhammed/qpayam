import React from "react"
import {
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
} from "../../../Styles/Home/Footer/Footer.style"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { categories } from "./Footer.helper"
import PhoneIcon from "@mui/icons-material/Phone"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Qpayam</Logo>
        <Description>
          Initial website design for Qpayam. Sample for client demo.
        </Description>
        <SocialContainer>
          <SocialIcon bg="#4267B2">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon bg="#405DE6">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bg="#25D366">
            <WhatsAppIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>CATEGORIES</Title>
        <CategoryList>
          {categories.map((item) => {
            return <CategoryItem key={item.id}>{item.title}</CategoryItem>
          })}
        </CategoryList>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnIcon style={{ marginRight: "10px" }} />
          Peechampilly Building, Padamugal, Cochin
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +91-9995-090-399
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} />
          av.qpayam@gmail.com
        </ContactItem>
      </Right>
    </Container>
  )
}

export default Footer
