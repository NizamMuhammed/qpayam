import React from "react"
import {
  NavBarContainer,
  Wrapper,
  Left,
  Right,
  Center,
  SearchContainer,
  Input,
  Logo,
  RightMenuItem,
  StyledBadge,
} from "./Navbar.style"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"

const Navbar = () => {
  return (
    <NavBarContainer>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ cursor: "pointer", fontSize: "16" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Qpayam</Logo>
        </Center>
        <Right>
          <RightMenuItem>Sign Up</RightMenuItem>
          <RightMenuItem>Log In</RightMenuItem>
          <StyledBadge badgeContent={1}>
            <ShoppingCartOutlinedIcon />
          </StyledBadge>
        </Right>
      </Wrapper>
    </NavBarContainer>
  )
}

export default Navbar
