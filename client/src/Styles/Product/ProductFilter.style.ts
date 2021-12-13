import styled from "styled-components"

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`

const Filter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

const FilterTitle = styled.div`
  font-size: 20px;
  font-weight: 200;
`

const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 10px;
  cursor: pointer;
`

const FilterSizeOption = styled.option``

const FilterSize = styled.select`
  margin-left: 10px;
  font-size: 16px;
  width: 20%;
  height: 30px;
`

export {
  FilterContainer,
  FilterSize,
  FilterColor,
  FilterTitle,
  FilterSizeOption,
  Filter,
}
