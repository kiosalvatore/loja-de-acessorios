import styled, { css } from "styled-components";

export const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.section`
  /* height: 350px; */

  width: 100%;
  img {
    width: 100%;
  }
`;
export const Catalogo = styled.section`
  width: 100%;
  margin-top: 50px;
  border: solid blue;
  display: flex;
  /* align-items: center; */
  ${Center}
`;
export const Card = styled.div`
  border: 2px solid black;
  /* width: 20%; */
  height: auto;
  text-align: center;
  ${Center}
  flex-wrap: wrap;
  margin-left: 10px;
  background-color: white;
  border-radius: 13px;
  img {
    width: 80%;
  }
  p {
    margin-top: 20px;
    ${Center}
  }
  button {
    background-color: grey;
    color: white;
    border: none;
    margin-top: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 10px 20px;
    border-radius: 10px;
  }
`;
export const ContainerCard = styled.div`
  border: solid red;
  margin-inline: 10px;
  button {
    background-color: red;
  }
`;
