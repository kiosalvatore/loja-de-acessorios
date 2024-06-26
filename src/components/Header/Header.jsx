import * as S from "./header_styled";
// import carrinho from "../../assets/carrinho.png";
import { FaCartPlus } from "react-icons/fa";


export default function Header() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log("Cadastrou o usuário!");
  }

  const produtosCarrinho = () => {
    console.log("clicou no carrinho");
  };

  return (
    <div>
      <S.Header>
        <S.Logo>
          <h1>QUIET LUXURY & Co.</h1>
        </S.Logo>

        <S.Search>
          <form onClick={cadastrarUsuario}>
            <div>
              <input type="text" placeholder="O que você está buscando?" />
            </div>
          </form>
        </S.Search>

        <S.Carrinho onClick={produtosCarrinho}>
          <FaCartPlus/>
        </S.Carrinho>
      </S.Header>
    </div>
  );
}
