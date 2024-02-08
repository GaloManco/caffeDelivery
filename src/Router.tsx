import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/defaultLayout'
import { Home } from './pages/home/Home'
import { EntregaDoPedido } from './pages/entragaDopedido'
import { CadastroDoPedido } from './pages/cadastroDopedido'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/entregadopedido" element={<EntregaDoPedido />} />
        <Route path="/cadastrodopedido" element={<CadastroDoPedido />} />
      </Route>
    </Routes>
  )
}
