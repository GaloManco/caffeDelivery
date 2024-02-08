import styled from 'styled-components'

export const StyleConteinerPedidoConfirmado = styled.div`
  /* border: 1px solid red; */

  width: 70rem;
  height: 24.5625rem;
  margin-top: 120px;
`
export const StyleHeaderEntregaDopedido = styled.header`
  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    color: ${(props) => props.theme.yellow_dark};
  }
  & p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`
export const StyleFooterEntregaDoPedido = styled.footer`
  width: 32.875rem;
  height: 16.875rem;
  margin-top: 2.5rem;

  border: 2px solid transparent;
  border-image: linear-gradient(
    to right,
    ${(props) => props.theme.yellow_dark},
    ${(props) => props.theme.purple}
  );
  border-image-slice: 1;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-right: 2.5rem;
  }
`

export const StyleExibirEndrecoDeEntrega = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  width: 22.125rem;
  height: 2.625rem;
  gap: 0.75rem;
  & span {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme.purple};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      color: ${(props) => props.theme.white};
    }
  }

  & p {
    display: flex;
    font-family: 'Roboto';
    font-size: 1rem;
    color: ${(props) => props.theme.base_text};
  }
  & strong {
    margin-left: 4px;
    font-family: 'Roboto';
    font-size: 1rem;
    color: ${(props) => props.theme.base_text};
  }
`
export const StyleExibirPrevisãoDeEntrega = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  width: 22.125rem;
  height: 2.625rem;
  gap: 0.75rem;
  & span {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme.yellow};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      color: ${(props) => props.theme.white};
    }
  }

  & p {
    display: flex;
    font-family: 'Roboto';
    font-size: 1rem;
    color: ${(props) => props.theme.base_text};
    margin-bottom: 3px;
  }
  & strong {
    margin-left: 4px;
    font-family: 'Roboto';
    font-size: 1rem;
    color: ${(props) => props.theme.base_text};
  }
`
export const StyleExibirTipoDePagamento = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  width: 22.125rem;
  height: 2.625rem;
  gap: 0.75rem;
  & span {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme.yellow_dark};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      color: ${(props) => props.theme.white};
    }
  }

  & p {
    display: flex;
    font-family: 'Roboto';
    font-size: 1rem;
    color: ${(props) => props.theme.base_text};
    margin-bottom: 3px;
  }
  & strong {
    margin-left: 4px;
    font-family: 'Roboto';
    font-size: 1rem;
    color: ${(props) => props.theme.base_text};
  }
`
export const StyleImagemMotinhaEntregando = styled.img`
  width: 30.75rem;
  height: 18.3125rem;
`
export const StyleConteinerInformacaoDaEntrega = styled.div`
  display: flex;
  gap: 6.375rem;
`
