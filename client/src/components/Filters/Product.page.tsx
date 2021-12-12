/*
 * Component used in a Page
 * Hence, given the '.page' extension naming convention
 */

import React from "react"
import {
  FilterContainer,
  FilterSize,
  FilterColor,
  FilterTitle,
  FilterSizeOption,
  Filter,
} from "./Product.page.style"

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
