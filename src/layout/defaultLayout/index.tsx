import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { ContainerLayout } from './style'

export function DefaultLayout() {
  return (
    <ContainerLayout>
      <Header />
      <Outlet />
    </ContainerLayout>
  )
}
