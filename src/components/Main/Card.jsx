import * as S from "./main_styled";
import Produtos from "../ProdutosData/Produtos";
import Invicta from "../ProdutosData/Invicta";
export default function Card() {
  return (
    <S.Card>
      {Produtos.map((data, index) => (
        <S.ContainerCard key={index}>
          <div>
            <img src={data.img} alt="" />
          </div>

          <div>
            <h3>{data.title}</h3>
            <p>{data.preco}</p>
            <p>{data.desconto}</p>
            <p>{data.descricao}</p>
          </div>
          <button>Comprar</button>
          {/* <S.Button>Comprar</S.Button> */}
        </S.ContainerCard>
      ))}

      {/* {Invicta.map((data, index) => (
        <S.ContainerCard key={index}>
          <div>
            <img src={data.img} alt="" />
          </div>

          <div>
            <h3>{data.title}</h3>
            <p>{data.preco}</p>
            <p>{data.desconto}</p>
            <p>{data.descricao}</p>
          </div>
          <button>Comprar</button>
        </S.ContainerCard>
      ))} */}
    </S.Card>
  );
}
