import { Minus, Plus, Trash } from 'phosphor-react'

export function ConfirmaPedido() {
  return (
    <section>
      <div>
        <ul>
          <li>
            <div>
              <span>imagem cafe</span>
              <div>
                <header>Expresso Tradicional</header>
                <footer>
                  <strong>
                    <Minus />
                    1
                    <Plus />
                  </strong>
                  <span>
                    <Trash />
                    <p>REMOVER</p>
                  </span>
                </footer>
              </div>
              <p>R$ 9,00</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <p>Total de itens</p>
          <p>R$ 20,70</p>
        </div>
        <div>
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div>
          <p>Total</p>
          <p>R$ 33,20</p>
        </div>
      </div>
    </section>
  )
}
