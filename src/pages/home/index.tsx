import { Header } from '../../components/Header'
import { Banner } from './components/Banner'
import { Products } from './components/Products'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <Banner />
      <Products />
    </Container>
  )
}
