import * as S from "./main_styled";
import Card from "./Card"
import banner from "../../assets/banner.png";
import relogio from "../../assets/relogio.png";

export default function Main() {
  return (
    <>
        <S.Main>
            <img src={banner} alt="" />

        </S.Main> 
        <S.Catalogo>
            <Card imagem={relogio} titulo={"Relógio Toulouse"} preço1={"R$169,99"} preço2={"R$149,99"}/>
            <Card imagem={relogio} titulo={"Relógio Toulouse"} preço1={"R$169,99"} preço2={"R$149,99"}/>
            <Card imagem={relogio} titulo={"Relógio Toulouse"} preço1={"R$169,99"} preço2={"R$149,99"}/>
            <Card imagem={relogio} titulo={"Relógio Toulouse"} preço1={"R$169,99"} preço2={"R$149,99"}/>
            
            
        </S.Catalogo>
    </>
  )
}
