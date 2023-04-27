import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/lazy";
import { useStateValue } from "../StateProvider";

function Login() {
  const [{ basket, gif }] = useStateValue();

  const [state, setstate] = useState(false);
  const [data, setData] = useState("Listen to Radio Dhermi");
  const [dis, setDis] = useState("none");
  const [back, setBack] = useState("");
  const [logo, setLogo] = useState("");
  const [kusht, setKusht] = useState(null);

  useEffect(() => {
    const onChange = () => {
      if (state === true) {
        setData("Stop");
        setDis("");
        setBack("");
        setLogo("none");
        setKusht(5);
      } else {
        setData("Listen to Radio Dhermi");
        setDis("none");
        setBack("/images/drymades.jpg");
        setLogo("");
        setKusht(null);
      }
    };
    onChange();
  }, [state]);
  return (
    <Container>
      <Content>
        <CTO>
          <CTOGif style={{ display: `${dis}` }} src={gif} alt="" />
          <CTOLogo
            style={{ display: `${logo}` }}
            src="/images/logo.png"
            alt=""
          />

          <Button
            onClick={() => {
              setstate(!state);
              setDis("");
            }}
          >
            {" "}
            {data}{" "}
          </Button>
          <ReactPlayer
            playing={state}
            style={{ display: "none" }}
            url={basket}
          />
        </CTO>
        <BgImage style={{ backgroundImage: `url(${back})` }} />
      </Content>
    </Container>
  );
}
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  background-color: black;
  right: 0;
  left: 0;
  z-index: -1;
`;
const CTO = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
`;
const CTOLogo = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const CTOGif = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  width: 100%;
`;

const Button = styled.button`
  font-weight: bold;
  cursor: pointer;
  color: #f9f9f9;
  background-color: black;
  margin-bottom: 12px;
  width: 100%;

  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: transparent;
  border-radius: 4px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export default Login;
