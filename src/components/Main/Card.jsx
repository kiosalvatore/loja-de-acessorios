import * as S from "./main_styled"

export default function Card({ imagem, titulo, preço1, preço2 }) {
  return (
    <S.Card>
        <img src={imagem} alt="" />
        <h1>{titulo}</h1>
        <p>{preço1}</p>
        <p>{preço2}</p>
        <button>Comprar</button>
        <button>Espiar</button>
    </S.Card>
  )
}