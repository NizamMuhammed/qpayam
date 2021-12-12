import React from "react"
import categories from "./Categories.helper"
import { Container, Wrapper } from "./Categories.style"
import CategoryItem from "../CategoryItem/CategoryItem"

const Categories = () => {
  return (
    <Wrapper>
      <h1>CATEGORIES</h1>
      <Container>
        {categories.map((item) => {
          return <CategoryItem item={item} key={item.id} />
        })}
      </Container>
    </Wrapper>
  )
}

export default Categories
