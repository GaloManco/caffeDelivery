import styled from 'styled-components'

export const StyledConteinerInfor = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 34rem;
  border: 1px solid;

  margin-top: 3rem;
`

export const StyledContainerItem = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 36.75rem;
  height: 17.25rem;
  gap: 4.12rem;

  margin-right: 3.5rem;
`
export const StyledInfor = styled.div`
  border: 1px solid;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 12rem;

  h1 {
    font-family: 'baloo 2';
    font-size: 3rem;
    display: flex;
    line-height: 1.2;
    color: ${(props) => props.theme.base_title};
  }
  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme.base_subtitle};
  }
`

export const StyleItens = styled.div`
  border: 1px solid;

  display: flex;
  width: 100%;
  height: 5.25rem;

  gap: 2.5rem;
`

export const StyleImgInfor = styled.div`
  width: 29.75rem;
  height: 22.5rem;
  display: flex;
`
