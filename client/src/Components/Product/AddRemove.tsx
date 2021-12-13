import React from "react"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import {
  AddRemoveContainer,
  AmountContainer,
  Amount,
  Button,
  ButtonContainer,
} from "../../Styles/Product/AddRemove.style"

const AddRemove = () => {
  return (
    <AddRemoveContainer>
      <AmountContainer>
        <RemoveIcon />
        <Amount>1</Amount>
        <AddIcon />
      </AmountContainer>
      <ButtonContainer>
        <Button>ADD TO CART</Button>
      </ButtonContainer>
    </AddRemoveContainer>
  )
}

export default AddRemove
