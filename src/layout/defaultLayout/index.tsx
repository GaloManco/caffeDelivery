import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { ContainerLayout } from './style'
import { TiposCafeProvider } from '../../contexts/contextTipoCafe'
import { ContextCompletarPeditoProvider } from '../../contexts/contextoCompletarPedido/contextCompletarPedido'

export function DefaultLayout() {
  return (
    <ContainerLayout>
      <TiposCafeProvider>
        <ContextCompletarPeditoProvider>
          <Header />
          <Outlet />
        </ContextCompletarPeditoProvider>
      </TiposCafeProvider>
    </ContainerLayout>
  )
}
