import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eee',
  rosa: '#E66767',
  rosaClaro: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
}

body {
  background-color: ${cores.branca};
  color: ${cores.branca};
}
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
