import styled,{createGlobalStyle, css} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-style: 'Playfair Display SC';

    }
`
export const Center = css`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.header`
    /* border: 2px solid red; */
    background-color: #34495E;
    height: 150px;
    display: flex;
    justify-content: space-around;
    
    
`

export const Logo = styled.div`
    /* border: 2px solid red; */
    width: 50%;
    color: white;
    font-size: 0.8rem;
    /* margin-left: 10px; */
    ${Center}
    justify-content: start;
`
// export const Search = styled.div`

// `
export const Carrinho = styled.div`
    /* border: 2px solid red; */
    width: 20%;
    ${Center}
    justify-content: flex-end;
    img{
        width: 30%;
    }
`