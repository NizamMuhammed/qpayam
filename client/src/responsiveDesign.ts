import { css } from "styled-components"

/*
 * Function to make responsive design
 * Props are passed which are trnasformed for mobile view
 * 'css' is a styled-coponents method
 */

const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `
}

export default mobile
