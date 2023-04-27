import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const chill =
    "https://www.youtube.com/watch?v=3x3PK8qdH1w&ab_channel=NonstopMusic";
  const deep =
    "https://www.youtube.com/watch?v=als7xoyNyoE&ab_channel=Gentleman";
  const rock =
    "https://www.youtube.com/watch?v=ZcjdJ-qvbUM&ab_channel=AlternativeRockMusic90%27s";
  const Reggaeton =
    "https://www.youtube.com/watch?v=h2ssrWHh4SE&ab_channel=LewisBennett";
  const trans =
    "https://www.youtube.com/watch?v=WYetg3AuLE4&ab_channel=RazNitzanMusic";
  const classic =
    "https://www.youtube.com/watch?v=2gO1v2GPMFk&ab_channel=ILoveYouVenice";
  const meditation =
    "https://www.youtube.com/watch?v=tNkZsRW7h2c&ab_channel=RelaxationAmbientMusic";
  const jazz =
    "https://www.youtube.com/watch?v=Dx5qFachd3A&ab_channel=CafeMusicBGMchannel";
  const cuba =
    "https://www.youtube.com/watch?v=udfSJ1wj1YE&ab_channel=TOOSTMUSIC-BestWorldMusic";
  const rain =
    "https://www.youtube.com/watch?v=nR-Zen2s2Qw&ab_channel=Nemo%27sDreamscapes";
  const ocean =
    "https://www.youtube.com/watch?v=V3h2twITdLQ&ab_channel=NaturalezaViva-SonidosyPaisajesIncre%C3%ADbles";
  const river =
    "https://www.youtube.com/watch?v=l6J0ylYTO4s&ab_channel=OCBRelaxMusic";
  const hits =
    "https://www.youtube.com/watch?v=19hKXI1ENrY&ab_channel=TheGoodLifeRadioxSensualMusique";
  const oriental =
    "https://www.youtube.com/watch?v=JpUIJg2z9YU&ab_channel=CafeDeAnatolia";
  return (
    <Nav>
      <NavMenu>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: chill,
              anime: "/images/chill1.gif",
            });
          }}
        >
          <span>Lounge Chillout </span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: deep,
              anime: "/images/deep.gif",
            });
          }}
        >
          <span>Deep House</span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: hits,
              anime: "/images/hit1.gif",
            });
          }}
        >
          <span>Hits</span>
        </a>

        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: oriental,
              anime: "/images/oriental.gif",
            });
          }}
        >
          <span>Anatolia</span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: rock,
              anime: "/images/rock1.gif",
            });
          }}
        >
          <span>Rock</span>
        </a>

        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: Reggaeton,
              anime: "/images/rega.gif",
            });
          }}
        >
          <span>Reggaeton</span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: cuba,
              anime: "/images/cuba.gif",
            });
          }}
        >
          <span>Cuba</span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: jazz,
              anime: "/images/jazz.gif",
            });
          }}
        >
          <span>Relaxing Jazz</span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: trans,
              anime: "/images/trance.gif",
            });
          }}
        >
          <span>Trance</span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: classic,
              anime: "/images/clasic.gif",
            });
          }}
        >
          <span>Classical Instrumental</span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: meditation,
              anime: "/images/meditation.gif",
            });
          }}
        >
          <span>Meditation</span>
        </a>

        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: rain,
              anime: "/images/rain.gif",
            });
          }}
        >
          <span>Rain</span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: ocean,
              anime: "/images/ocean.gif",
            });
          }}
        >
          <span>Ocean</span>
        </a>
        <a
          onClick={() => {
            dispatch({
              type: "ADD_TO_BASKET",
              item: river,
              anime: "/images/river.gif",
            });
          }}
        >
          <span>Water</span>
        </a>
      </NavMenu>
    </Nav>
  );
}
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
const NavMenu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  height: 100%;
  margin-right: auto;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    position: relative;
    white-space: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    margin-right: auto;
    margin-left: auto;
  }
`;
export default Header;
