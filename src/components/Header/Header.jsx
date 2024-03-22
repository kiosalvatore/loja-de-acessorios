
import * as S from "./header_styled"
import carrinho from "../../assets/carrinho.png"

export default function Header() {
  return (
    <div>
      <S.Header>
        <S.Logo>
            <h1>QUIET LUXURY & Co.</h1>
        </S.Logo>
        <S.Carrinho>
            <img src={carrinho} alt="" />
        </S.Carrinho>
      </S.Header>
    </div>
  )
}
