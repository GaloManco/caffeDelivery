import styled from 'styled-components'

export const StyleCard = styled.div`
  width: 16rem;
  height: 19.37rem;

  display: flex;
  align-items: center;

  border-radius: 6px 36px 6px 36px;

  flex-direction: column;

  padding: 1.5rem;
  background: ${(props) => props.theme.base_card};

  img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }
`

export const StyleInforCard = styled.div`
  width: 13.5rem;
  height: 11.13rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
