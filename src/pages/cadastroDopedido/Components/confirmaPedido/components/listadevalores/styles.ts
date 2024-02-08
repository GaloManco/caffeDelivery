import styled from 'styled-components'

export const StyleConteinerListaDeValores = styled.div`
  /* border: 1px solid red; */

  width: 23rem;
  height: 11.625rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    & p {
      font-size: 0.875rem;
      font-family: 'Roboto';
    }
    & span {
      font-size: 1rem;
      font-family: 'Roboto';
    }
  }
`
export const StyleConteinerTotalDoValor = styled.div`
  & p {
    font-size: 1.25rem !important;
    font-family: 'Roboto';
    font-weight: bold;
  }
  & span {
    font-size: 1.25rem !important;
    font-family: 'Roboto';
    font-weight: bold;
  }
`

export const StyleButtonConfirmaPedido = styled.button`
  width: 23rem;
  height: 2.875rem;
  border: none;
  background: ${(props) => props.theme.yellow};
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-size: 'Reboto';
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.yellow_dark};
  }
`
