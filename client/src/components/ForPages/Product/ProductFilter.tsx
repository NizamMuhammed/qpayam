import React from "react"
import {
  FilterContainer,
  FilterSize,
  FilterColor,
  FilterTitle,
  FilterSizeOption,
  Filter,
} from "./ProductFilter.style"

const ProductFilters = () => {
  return (
    <FilterContainer>
      <Filter>
        <FilterTitle>Color:</FilterTitle>
        <FilterColor color="black" />
        <FilterColor color="brown" />
        <FilterColor color="tan" />
      </Filter>
      <Filter>
        <FilterTitle>Size:</FilterTitle>
        <FilterSize>
          <FilterSizeOption>S</FilterSizeOption>
          <FilterSizeOption>M</FilterSizeOption>
          <FilterSizeOption>L</FilterSizeOption>
          <FilterSizeOption>XL</FilterSizeOption>
        </FilterSize>
      </Filter>
    </FilterContainer>
  )
}

export default ProductFilters
