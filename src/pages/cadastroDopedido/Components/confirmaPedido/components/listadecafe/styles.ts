import styled from 'styled-components'

export const StyleConteinerUL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  overflow: auto;

  li {
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 23rem;
    min-height: 8rem;
    border-bottom: 1px solid ${(props) => props.theme.base_button};

    img {
      width: 4rem;
      height: 4rem;
    }
    div {
      display: flex;
      flex-direction: column;
      width: 10.6875rem;
      height: 3.8125rem;
      gap: 0.3125rem;

      h5 {
        font-size: 1rem;
        color: ${(props) => props.theme.base_subtitle};
        font-weight: lighter;
      }
      & > div {
        display: flex;

        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        strong {
          display: flex;
          align-items: center;
          justify-content: space-around;
          border-radius: 6px;
          background: ${(props) => props.theme.base_button};
          width: 4.5rem;
          height: 2rem;

          button {
            border: none;
            background: none;
            cursor: pointer;
          }
          &:hover svg {
            color: ${(props) => props.theme.purple};
          }
        }
        span {
          background: ${(props) => props.theme.base_button};
          button {
            cursor: pointer;
            width: 5.6875rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            background: none;
            svg {
              margin-right: 2px;
            }
            &:hover svg {
              color: ${(props) => props.theme.purple};
            }
            p {
              font-size: 0.75rem;
              font-family: 'Roboto';
              color: ${(props) => props.theme.base_text};
            }
            &:hover p {
              color: ${(props) => props.theme.purple};
            }
          }
        }
      }
    }
  }
`

export const StyleValorTotal = styled.p`
  /* border: 1px solid red; */
  font-size: 1rem;
  color: ${(props) => props.theme.base_text};
  font-family: 'Roboto';
  font-weight: bold;
  height: 3.8125rem;
`
