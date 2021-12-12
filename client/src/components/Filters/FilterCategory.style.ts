import styled from "styled-components"

const Container = styled.div``

const Title = styled.h1`
  margin: 20px;
  text-align: center;
  color: #519259;
`

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`

const Filter = styled.div`
  flex: 1;
`
const FilterText = styled.span`
  font-size: 16px;
  font-weight: 600;
`

const Select = styled.select`
  margin-left: 20px;
  min-height: 30px;
  min-width: 30%;
  border-radius: 5px;
`

const Option = styled.option``

export { Container, Title, FilterContainer, Filter, FilterText, Select, Option }
