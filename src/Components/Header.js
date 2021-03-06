import React from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();
  const chill =
    "https://www.youtube.com/watch?v=36YnV9STBqc&ab_channel=TheGoodLifeRadioxSensualMusique";
  const deep =
    "https://www.youtube.com/watch?v=WsDyRAPFBC8&ab_channel=MonstercatSilk";
  const rock = "https://www.youtube.com/watch?v=U2wfGCojp3w&ab_channel=RGN";
  const Reggaeton =
    "https://www.youtube.com/watch?v=TL-fkiYXj2Q&ab_channel=MusicaBachata";
  const trans =
    "https://www.youtube.com/watch?v=WYetg3AuLE4&ab_channel=RazNitzanMusic";
  const classic =
    "https://www.youtube.com/watch?v=2gO1v2GPMFk&ab_channel=ILoveYouVenice";
  const meditation =
    "https://www.youtube.com/watch?v=g44sfv5KGwo&ab_channel=YellowBrickCinema-RelaxingMusic";
  const jazz =
    "https://www.youtube.com/watch?v=Dx5qFachd3A&ab_channel=CafeMusicBGMchannel";
  const alternative =
    "https://www.youtube.com/watch?v=5X18D-EbjUc&ab_channel=frequenzy";
  const tropical =
    "https://www.youtube.com/watch?v=SIt21jdTYKk&ab_channel=BallisticLive";
  const rain =
    "https://www.youtube.com/watch?v=R0NME9W3cR4&t=80s&ab_channel=NatureSFX";
  const ocean =
    "https://www.youtube.com/watch?v=vPhg6sc1Mk4&ab_channel=NaturalezaViva-SonidosyPaisajesIncre%C3%ADbles";
  const river =
    "https://www.youtube.com/watch?v=IvjMgVS6kng&t=8s&ab_channel=TheSilentWatcher";
  const hits =
    "https://www.youtube.com/watch?v=19hKXI1ENrY&ab_channel=TheGoodLifeRadioxSensualMusique";
  const oriental =
    "https://www.youtube.com/watch?v=DAbHQzGiDMo&ab_channel=CafeDeAnatoliaLOUNGE";
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
              item: tropical,
              anime: "/images/giphy.gif",
            });
          }}
        >
          <span>Tropical</span>
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
              item: alternative,
              anime: "/images/rock.gif",
            });
          }}
        >
          <span>Alternative</span>
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
              item: oriental,
              anime: "/images/oriental.gif",
            });
          }}
        >
          <span>Oriental</span>
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
          <span>River</span>
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

  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
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
