import styled from "styled-components"
import Badge from "@mui/material/Badge"

const NavBarContainer = styled.div`
  height: 60px;
  background-color: #edd2f3;
  width: 100%;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
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
`
const SearchContainer = styled.div`
  border: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 5px;
  border-radius: 5px;
  width: 70%;
`
const Input = styled.input`
  border: none;
  background-color: none;
  outline: 0;
  border-radius: 5px;
  background: #edd2f3;
  width: 100%;
`

const Logo = styled.h1`
  font-weight: bold;
  margin: 0;
  padding: 0;
`

const RightMenuItem = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-right: 25px;
  cursor: pointer;
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
}
