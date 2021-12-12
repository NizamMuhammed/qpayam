//Component to show the filters used in ProductList page

import React from "react"
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
} from "./FilterCategory.style"

const FilterCategory = () => {
  return (
    <Container>
      <Title>SALE! SALE! SALE!</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter By:</FilterText>
          <Select>
            <Option disabled selected>
              Choose filter
            </Option>
            <Option>Top Wear</Option>
            <Option>Men</Option>
            <Option>Boys</Option>
            <Option>Availability</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select>
            <Option disabled selected>
              None
            </Option>
            <Option>Price: High - Low</Option>
            <Option>Price: Low - High</Option>
            <Option>User Ratings</Option>
          </Select>
        </Filter>
      </FilterContainer>
    </Container>
  )
}

export default FilterCategory
