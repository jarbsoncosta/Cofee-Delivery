import { Outlet } from 'react-router'
import { Header } from '../../components/Header'
import { LayoultContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoultContainer>
      <Header />
      <Outlet />
    </LayoultContainer>
  )
}
