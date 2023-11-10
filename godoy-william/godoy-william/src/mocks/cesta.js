import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abobora.png';

const cesta = {
  topo: {
    titulo: "Detalhes do kit",
  },
  detalhes: {
    nome: "Kit volta as aulas",
    logoFazenda: logo,
    nomeFazenda: "Papelaria JSL",
    descricao: "Preocurando por kit escolar com valor acessível? Aqui você encontra oque precisa!",
    preco: "R$ 135,90",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens do kit",
    lista: [
      {
        nome: "Mochila",
        imagem: abobora,
      },
      {
        nome: "Caderno 1 matéria",
        imagem: tomate,
      },
      {
        nome: "Estojo com 2 compartimentos",
        imagem: brocolis,
      },
      {
        nome: "Post-it",
        imagem: batata,
      },
      {
        nome: "Marca textos pastéis (6)",
        imagem: pepino,
      },
      {
        nome: "Caneta 12 cores",
        imagem: abobora,
      },
      {
        nome: "Kit caneta colorida",
        imagem: abobora,
      }

    ]
  }
}

export default cesta;