import cafe01 from '../assets/cafe01.svg'
import cafe02 from '../assets/cafe02.svg'
import cafe03 from '../assets/cafe03.svg'
import cafe04 from '../assets/cafe04.svg'
import cafe05 from '../assets/cafe05.svg'
import cafe06 from '../assets/cafe06.svg'
import cafe07 from '../assets/cafe07.svg'
import cafe08 from '../assets/cafe08.svg'
import cafe09 from '../assets/cafe09.svg'
import cafe10 from '../assets/cafe10.svg'
import cafe11 from '../assets/cafe11.svg'
export const DadosCafe = [
  {
    id: '01',
    nome: 'Expresso Tradicional',
    descricao: 'O tradicional café feito com água quente e grão moídos',
    preco: 9,
    imagem: cafe01,
    tipoDeCafer: [{ sabor01: 'Quente' }],
  },
  {
    id: '02',
    nome: 'Expresso Americano',
    descricao: 'Expresso diluído, menos intenso que o tradicional',
    preco: 9,
    imagem: cafe02,
    tipoDeCafer: [{ sabor01: 'Tradicional' }],
  },
  {
    id: '03',
    nome: 'Expresso Cremoso',
    descricao: 'Café expresso tradicional com espuma cremosa',
    preco: 9,
    imagem: cafe03,
    tipoDeCafer: [{ sabor01: 'Tradicional' }],
  },
  {
    id: '04',
    nome: 'Expresso Gelado',
    descricao: 'Bebida preparada com café expresso e cubos de gelo',
    preco: 9,
    imagem: cafe04,
    tipoDeCafer: [{ sabor01: 'TRADICIONAL', sabor02: 'GELADO' }],
  },
  {
    id: '05',
    nome: 'Café com Leite',
    descricao: 'Meio a meio de expresso tradicional com leite vaporizado',
    preco: 9,
    imagem: cafe05,
    tipoDeCafer: [{ sabor01: 'TRADICIONAL', sabor02: 'COM LEITE' }],
  },
  {
    id: '06',
    nome: 'Latte',
    descricao: 'Café expresso com o dobro de leite e espuma cremosa',
    preco: 9,
    imagem: cafe06,
    tipoDeCafer: [{ sabor01: 'TRADICIONAL', sabor02: 'COM LEITE' }],
  },
  {
    id: '07',
    nome: 'Capuccino',
    descricao:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    preco: 9,
    imagem: cafe07,
    tipoDeCafer: [{ sabor01: 'TRADICIONAL', sabor02: 'COM LEITE' }],
  },
  {
    id: '08',
    nome: 'Macchiato',
    descricao: 'Café expresso misturado com um pouco de leite quente e espuma',
    preco: 9,
    imagem: cafe08,
    tipoDeCafer: [{ sabor01: 'TRADICIONAL', sabor02: 'COM LEITE' }],
  },
  {
    id: '09',
    nome: 'Mocaccino',
    descricao: 'Café expresso com calda de chocolate, pouco leite e espuma',
    preco: 9,
    imagem: cafe09,
    tipoDeCafer: [{ sabor01: 'ESPECIAL', sabor02: 'COM LEITE' }],
  },
  {
    id: '10',
    nome: 'Chocolate Quente',
    descricao: 'Bebida feita com chocolate dissolvido no leite quente e café',
    preco: 9,
    imagem: cafe10,
    tipoDeCafer: [{ sabor01: 'ESPECIAL', sabor02: 'COM LEITE' }],
  },
  {
    id: '11',
    nome: 'Cubano',
    descricao:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    preco: 9,
    imagem: cafe11,
    tipoDeCafer: [
      { sabor01: 'ESPECIAL', sabor02: 'ALCOÓLICO', sabor03: 'GELADO' },
    ],
  },
]
