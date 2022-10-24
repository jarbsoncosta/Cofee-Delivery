import styled from 'styled-components'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Container = styled.main`
  padding: 0 10rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  h3 {
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 1rem;
  }

  .items {
    h3 {
      color: ${(props) => props.theme['gray-800']};
      margin-bottom: 1rem;
    }
  }
  form {
    display: flex;
    gap: 2rem;
  }
  @media (max-width: 1153px) {
    flex-wrap: wrap-reverse;
  }
`

export const FormRequest = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h3 {
    color: ${(props) => props.theme['gray-800']};
    margin-bottom: 1rem;
  }
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  width: 100%;
  max-width: 40rem;
  height: 23.25rem;
  gap: 1rem;
  span {
    display: flex;
    align-items: center;
    font-size: 1rem;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-800']};
    svg {
      color: ${(props) => props.theme['yellow-dark']};
    }
  }
  p {
    margin: -1rem 0 1rem 1.6rem;
  }

  .group1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme['gray-400']};
      background: ${(props) => props.theme['gray-300']};
      height: 2.5rem;
      padding-left: 0.5rem;
      :first-child {
        width: 100%;
        max-width: 12.5rem;
      }
      ::placeholder {
        padding-left: 0.5rem;
      }
    }
    span {
      font-size: 0.875rem;
      color: red;
    }
  }
  .group2 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    input {
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme['gray-400']};
      background: ${(props) => props.theme['gray-300']};
      width: 21.75rem;
      height: 2.5rem;
      padding-left: 0.5rem;
      :first-child {
        width: 100%;
        max-width: 12.5rem;
      }
      ::placeholder {
        padding-left: 0.5rem;
      }
    }
  }
  .group3 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    input {
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme['gray-400']};
      background: ${(props) => props.theme['gray-300']};
      width: 17.25rem;
      height: 2.5rem;
      padding-left: 0.5rem;
      :first-child {
        width: 12.5rem;
      }
      :last-child {
        width: 100%;
        max-width: 3.75rem;
      }
      ::placeholder {
        padding-left: 0.5rem;
      }
    }
  }
`

export const ContainerPayment = styled.div`
  background: ${(props) => props.theme['gray-100']};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme['gray-800']};
  }
  svg {
    color: ${(props) => props.theme.purple};
  }
  p {
    margin: 0 0 1rem 1.6rem;
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 2rem;
`

export const TransactionTypeButton = styled(RadioGroup.Item)`
  background: ${(props) => props.theme['gray-400']};
  width: 100%;
  display: flex;
  height: 3.18rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['gray-700']};
  font-size: 0.75rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-500']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme['gray-700']};
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
    box-shadow: none;
  }
`
export const Items = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-100']};
  border-radius: 6px 44px;
  width: 28rem;
  height: max-content;

  .btnSubmit {
    height: 2.87rem;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme.yellow};
    font-size: 0.875rem;
    color: ${(props) => props.theme.white};
    transition: 1s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }

  .cart {
    padding: 1.5rem 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  }

  .divImg {
    width: 4rem;
    height: 4rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  .divInfo {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    padding: 0;
    padding: 0 1.25rem;

    .title-price {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 1rem;
        color: ${(props) => props.theme['gray-800']};
      }
      strong {
        color: ${(props) => props.theme['gray-800']};
      }
    }
    .amount-button-cart {
      height: 2.37rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .amount {
      padding: 0 0.5rem;
      border-radius: 6px;
      width: 5rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      background: ${(props) => props.theme['gray-400']};
      .btn-amount {
        background: transparent;
        box-shadow: none;
        &:disabled {
          svg {
            color: ${(props) => props.theme['gray-500']};
          }
        }
      }
      svg {
        color: ${(props) => props.theme['purple-dark']};
      }
      span {
        display: flex;
        align-items: center;
        font-size: 1rem;
        color: ${(props) => props.theme['gray-800']};
      }
    }

    button {
      cursor: pointer;
      border: 0;
      display: flex;
      align-items: center;
      border-radius: 6px;
      padding: 0.5rem;
      width: 5.68rem;
      height: 2rem;
      background: ${(props) => props.theme['gray-400']};
      font-size: 0.75rem;
      gap: 0.25rem;
      color: ${(props) => props.theme['gray-700']};
      transition: 1s;
      &:hover {
        background: ${(props) => props.theme['gray-500']};
      }
    }
    svg {
      color: ${(props) => props.theme['purple-dark']};
      cursor: pointer;
    }
  }
  .orderSummary {
    padding: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.874rem;
    .tItems-delivery {
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 0.875rem;
      }
    }
    .total {
      display: flex;
      justify-content: space-between;
      strong {
        font-size: 1.25rem;
        color: ${(props) => props.theme['gray-800']};
      }
    }
  }
`
