import styled from 'styled-components'

export const StyleConfirmaPedido = styled.section`
  width: 28rem;
  max-height: 31.12rem;

  background: ${(props) => props.theme.base_card};
  border-radius: 6px 44px 6px 44px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 69px;
`

export const StyleListaDeProdutosComprados = styled.li`
  list-style: none;
`

export const StyleListaDeCaffeSelecionados = styled.div`
  /* border: 0.0625rem solid red; */

  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 368px;
  height: 80px;

  img {
    width: 64px;
    height: 64px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 171px;
    height: 61px;
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 171px;
      height: 32px;
      margin-top: 8px;

      strong {
        width: 72px;
        height: 32px;
        background: ${(props) => props.theme.base_button};
        border-radius: 0.375rem;

        display: flex;
        align-items: center;
        justify-content: space-around;

        color: ${(props) => props.theme.base_title};
        &:hover {
          color: ${(props) => props.theme.purple};
        }

        button {
          border: none;
          background: none;
          cursor: pointer;
          svg {
            color: ${(props) => props.theme.purple};
          }
        }
      }
      span {
        width: 5.6875rem;
        height: 2rem;
        background: ${(props) => props.theme.base_button};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        /* &:focus {
          color: ${(props) => props.theme.purple};
        } */
        button {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          border: none;
          background: none;

          font-size: 0.75rem;
          color: ${(props) => props.theme.base_title};

          &:hover {
            color: ${(props) => props.theme.purple};
          }
          p {
            cursor: pointer;
          }

          svg {
            /* color: ${(props) => props.theme.base_text}; */
            cursor: pointer;
            color: ${(props) => props.theme.purple};

            &:hover {
              color: ${(props) => props.theme.purple};
            }
          }
        }
      }
    }
  }
`

export const StyleValorDoProduto = styled.p`
  font-size: 1rem;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${(props) => props.theme.base_text};
`
