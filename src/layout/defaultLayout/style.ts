import styled from 'styled-components'

export const ContainerLayout = styled.nav`
  border: 1px solid red;

  width: 90rem;
  height: 149.31rem;

  background: ${(props) => props.theme.background};
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
`
