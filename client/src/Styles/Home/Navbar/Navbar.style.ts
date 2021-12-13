import styled from "styled-components"
import Badge from "@mui/material/Badge"
import mobile from "../../../responsiveDesign"

const Container = styled.div`
  width: 100%;
  ${mobile({ width: "100%" })}
`

const NavBarContainer = styled.div`
  height: 60px;
  background-color: #97bfb4;
  width: 100%;
  ${mobile({ display: "flex", alignItems: "center" })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  ${mobile({ padding: "0", alignItems: "center" })}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
`
const Right = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  ${mobile({ justifyContent: "start", width: "100%" })}
`
const SearchContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 5px;
  border-radius: 5px;
  width: 70%;
  ${mobile({ width: "100%" })}
`
const Input = styled.input`
  border: none;
  background-color: none;
  outline: 0;
  border-radius: 5px;
  background: transparent;
  width: 100%;
`

const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
  padding: 0;
  ${mobile({ fontSize: "25px" })}
`

const RightMenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 25px;
  cursor: pointer;
  ${mobile({
    fontSize: "12px",
    marginRight: "0",
    paddingLeft: "5px",
  })}
`

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    color: "#516BEB",
    backgroundColor: "#FFFCDC",
  },
  cursor: "pointer",
})

export {
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
  Container,
}
