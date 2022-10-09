import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  padding: 0 10rem;
  justify-content: space-between;
  align-items: center;

  .address-cart {
    display: flex;
  }
  .address {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: 2.37rem;
    padding: 0 0.5rem;
    gap: 0.5rem;
    background: ${(props) => props.theme['purple-light']};
    p {
      color: ${(props) => props.theme['purple-dark']};
      font-size: 0.875rem;
      line-height: 130%;
    }
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
  .cart {
    cursor: pointer;
    margin-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    height: 2.37rem;
    width: 2.37rem;
    background: ${(props) => props.theme['yellow-light']};
    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    margin: -0.3rem 0 0 -0.6rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${(props) => props.theme.white};

    border-radius: 50%;
    background: ${(props) => props.theme['yellow-dark']};
  }
`
