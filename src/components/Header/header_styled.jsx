import styled,{createGlobalStyle, css} from "styled-components";
// import Search from "./Search";

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
export const Search = styled.div`
    /* border: 2px solid red; */
    width: 50%;
    ${Center}
    form{
        /* border: 2px solid red; */
        width: 100%;
        
    }
    input{
        /* border: 10px solid yellow; */
        width: 100%;
        height: 40px;
        border-radius: 12px;
        text-decoration: none;
        padding-left: 5px;
        outline: none;
        
    }
    input::placeholder{
        padding-left: 5px;
    }
`

export const Logo = styled.div`
    /* border: 2px solid red; */
    width: 30%;
    color: white;
    font-size: 0.8rem;
    /* margin-left: 10px; */
    ${Center}
    /* justify-content: start; */
`

export const Carrinho = styled.div`
    /* border: 2px solid red; */
    width: 20%;
    ${Center}
    
    img{
        width: 30%;
    }
`
