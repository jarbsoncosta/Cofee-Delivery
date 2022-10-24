import styled from 'styled-components'

export const Container = styled.main`
  max-width: 70rem;
  margin: 0 auto;

  section {
    text-align: start;
    margin-top: 7rem;
    h1 {
      color: ${(props) => props.theme['yellow-dark']};
      font-weight: 800;
      font-size: 2rem;
    }
  }
  span {
    color: ${(props) => props.theme['gray-700']};
  }
`
export const Content = styled.div`
  display: flex;
  gap: 6.5rem;
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  max-width: 32.8rem;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border: 1px solid ${(props) => props.theme.purple};
  border-radius: 6px 36px;
`
const StyleDefaultInfoProps = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    &:first-child {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      border-radius: 50%;
    }
    strong {
      color: ${(props) => props.theme['gray-700']};
    }
  }
`

export const Address = styled(StyleDefaultInfoProps)`
  div {
    &:first-child {
      background: ${(props) => props.theme.purple};
      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }
`
export const TimeDelivery = styled(StyleDefaultInfoProps)`
  div {
    &:first-child {
      background: ${(props) => props.theme.yellow};
      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }
`

export const Payment = styled(StyleDefaultInfoProps)`
  div {
    &:first-child {
      background: ${(props) => props.theme['yellow-dark']};
      svg {
        color: ${(props) => props.theme.white};
      }
    }
  }
`

export const Img = styled.div``
