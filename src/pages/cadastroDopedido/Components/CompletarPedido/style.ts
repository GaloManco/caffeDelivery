import styled from 'styled-components'

export const StyleCotainerCompletarPedito = styled.div`
  & > h2:first-child {
    font-size: 20.8px;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme.base_subtitle};
  }
`
export const StyleCompletarPedido = styled.section`
  width: 40rem;
  height: 23.25rem;

  background: ${(props) => props.theme.base_card};
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;

  margin-top: 0.8rem;
`

const BaseHeaderCompletarPedido = styled.header`
  /* border: 1px solid red; */

  color: ${(props) => props.theme.base_text};
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  h2 {
    display: flex;
    p {
      /* border: 1px solid red; */
      font-family: 'Roboto';
      font-weight: lighter;
      font-size: 1.2rem;
      margin-left: 4px;
    }
  }
  p {
    font-size: 0.9rem;
    margin-left: 1.8rem;
  }
`

export const StyleHeaderCompletarPedido = styled(BaseHeaderCompletarPedido)`
  svg {
    /* border: 1px solid red; */
    color: ${(props) => props.theme.yellow_dark};
  }
`
export const StyleFormularioCompletarPedido = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`
const BaseImputCompletarPedido = styled.input`
  height: 2.62rem;
  border-radius: 4px;
  border: none;
  background: ${(props) => props.theme.base_input};
  padding: 0.625rem;

  &::placeholder {
    color: ${(props) => props.theme.base_label};
    font-family: 'Roboto';
    font-size: 0.9rem;
    /* padding: .75rem; */
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const StyleImputCompletarPedido1 = styled(BaseImputCompletarPedido)`
  width: 12.5rem;
`
export const StyleImputCompletarPedido2 = styled(BaseImputCompletarPedido)``
export const StyleImputCompletarPedido3 = styled(BaseImputCompletarPedido)`
  width: 12.5rem;
  margin-right: 0.75rem;
`
export const StyleImputCompletarPedido4 = styled(BaseImputCompletarPedido)`
  width: 21.75rem;
  &::placeholder::after {
    content: 'teste';
    color: ${(props) => props.theme.base_label};
    font-family: 'Roboto';
    font-size: 0.8rem;
  }
`
export const StyleImputCompletarPedido5 = styled(BaseImputCompletarPedido)`
  width: 12.5rem;
  margin-right: 0.75rem;
`
export const StyleImputCompletarPedido6 = styled(BaseImputCompletarPedido)`
  width: 17.25rem;
  margin-right: 0.75rem;
`
export const StyleImputCompletarPedido7 = styled(BaseImputCompletarPedido)`
  width: 3.75rem;
`
// --------------------footer da página------------------------------------------
export const StyleFooterCompletarPedido = styled.div`
  width: 40rem;
  height: 12.9rem;
  border-radius: 6px;
  background: ${(props) => props.theme.base_card};

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  margin-top: 0.75rem;

  section {
    ul {
      display: flex;
      list-style: none;
      gap: 0.75rem;

      li {
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 11.1875rem;
          height: 3.1875rem;
          background: ${(props) => props.theme.base_button};
          border-radius: 6px;

          font-size: 0.75rem;
          font-family: 'Roboto';
          font-weight: lighter;
          letter-spacing: 0.0625rem;

          color: ${(props) => props.theme.base_text};
          cursor: pointer;
          border: none;

          &:hover {
            background: ${(props) => props.theme.purple_light};
          }
        }

        svg {
          color: ${(props) => props.theme.purple};
          margin-right: 0.75rem;
        }
      }
    }
  }
`
export const StyleHeaderCompletarPedido2 = styled(BaseHeaderCompletarPedido)`
  /* border: 1px solid red; */
  width: 560px;
  height: 44px;

  & > h2 {
    & > span {
      font-size: 1.2rem;
      font-family: 'Roboto';
      color: ${(props) => props.theme.base_subtitle};
      font-weight: lighter;
      margin-left: 0.5rem;
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`
