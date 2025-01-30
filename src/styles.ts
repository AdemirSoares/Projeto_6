import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  pink: '#E66767',
  lightPink: '#FFEBD9',
  transparentPink: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background-color: ${colors.transparentPink};
  color: ${colors.white};
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
