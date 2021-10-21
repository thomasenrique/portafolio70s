import './App.css';
import styled from "styled-components"
import Cuadradito from './Cuadradito';
import Perfil from './Perfil/Perfil';

const App = () => {

  const Body = styled.div`
    height: 100%;
    /* background-color: #ebdaaf; */
    background-image: url("https://64.media.tumblr.com/04e2df0c1bbbad82386e8b3a35b0574f/tumblr_pg05dm36IM1qbogbgo1_640.jpg");
    padding: 8px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-around;
  `
  const Footer = styled.div`
    width: 100%;
    min-height: 200px;
    position: absolute;
    color: #fb86aa;
    background-color: #fe3718;
    /* padding: 1%; */
    font-weight: 400;
  `
  const Encabezado = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: center;
    align-items: flex-start;
  `
  const HorizontalFull = styled.div`
    width: 97%;
    min-height: 100px;
    background-color:#e19a6c;
    /* border: solid 2px #611f2c; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-around;
    padding: 8px;
    border-radius: 8px;
    margin: 8px;
  `
  const HorizontalMedio = styled.div`
    width: 46%;
    min-height: 100px;
    background-color: #194769;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-around;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
  `
  const TitloHorizontal = styled.h3`
    width: 100%;
    margin: 8px;
    font-weight: 400;
    color: white;
    text-shadow: 2px 2px 5px black;
  `
  const Titulo = styled.h1`
    font-weight: 300;
    color: white;
    text-shadow: 2px 2px 5px #061d06;
    user-select: none;
  `

  return (
    <>
      <Body>
        <Encabezado>
          <Titulo>Thomas Enrique portafolio</Titulo>
        </Encabezado>
        <HorizontalFull>
          <TitloHorizontal>veamos como queda</TitloHorizontal>
        </HorizontalFull>
        <HorizontalFull>
          <Perfil
            nombre="thomas"
            email="thomas.mino.97@gmail.com"
            img="NIMG" />
        </HorizontalFull>

        <HorizontalMedio>
          <TitloHorizontal>Colores de muestra vintage</TitloHorizontal>
          <Cuadradito color="#0b1e37" />
          <Cuadradito color="#578ed1" />
          <Cuadradito color="#c5a830" />
          <Cuadradito color="#cd5a33" />
          <Cuadradito color="#bf998c" />
          <Cuadradito color="#877b87" />
          <Cuadradito color="#baac8f" />
        </HorizontalMedio>

        <HorizontalMedio>
          <TitloHorizontal>Colores de muestra 1</TitloHorizontal>
          <Cuadradito color="#fb86aa" />
          <Cuadradito color="#0c2f44" />
          <Cuadradito color="#185273" />
          <Cuadradito color="#237cab" />
          <Cuadradito color="#2ba9c8" />
        </HorizontalMedio>

        <HorizontalMedio>
          <TitloHorizontal>Colores de muestra 2</TitloHorizontal>
          <Cuadradito color="#061d06" />
          <Cuadradito color="#0c453c" />
          <Cuadradito color="#ca852b" />
          <Cuadradito color="#d6c278" />
          <Cuadradito color="#e8e8c3" />
        </HorizontalMedio>




      </Body>
      <Footer>
        mi nombre es thomas

      </Footer>
    </>
  );
}

export default App;
