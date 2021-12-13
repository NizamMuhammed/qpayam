import styled from "styled-components"

const AddRemoveContainer = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
`

const AmountContainer = styled.div`
  align-items: center;
  display: flex;
  font-weight: 700;
  font-size: 20px;
  width: 50%;
`

const Amount = styled.span`
  margin: 0 5px;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid grey;
  align-items: center;
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  padding: 15px;
  background-color: #e6ddc4;
  margin: 0;
  border: 4px solid grey;
  font-weight: 500;
  font-size: 16px;

  &:hover {
    background-color: #f0e9d2;
  }
`
const ButtonContainer = styled.div`
  width: 50%;
`

export { AddRemoveContainer, AmountContainer, Amount, Button, ButtonContainer }
