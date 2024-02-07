import React from "react";
import logo from "./assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import console from "./assets/Console.png";
import friendsImg from "./assets/friendImg.png";
import BgFrame from "./assets/bgFrame.png";


const HomePage = () => {
  const backgroundImageUrl = BgFrame;
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "contain",

    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <div
        style={containerStyle}
        className="h-[94vh] bg-primary-0 lg:h-screen relative 
        bg-[150px]
    "
      >
        {/* Logo */}
        <div className="p-3 flex lg:justify-between lg:items-center">
          <div className="image lg:w-1/5">
            <img src={logo} alt="logo" className="w-28 lg:w-[10rem]" />
          </div>
          {/* Navigation */}
          <nav
            className="hidden lg:flex Nav-links lg:text-white lg:font-bold lg:w-4/5  justify-evenly
          text-xl
          "
          >
            <NavLink to="https://specials.manoramaonline.com/Mobile/2022/flip-game/index.html">
              Memory Card Game
            </NavLink>
            <NavLink to="https://playtictactoe.org/">TIC TAC TOE</NavLink>
            <NavLink to="https://metzger.media/games/word-guess/">
              Word Guessing
            </NavLink>
            <NavLink to="https://www.rpsgame.org/random">
              Rock Paper Scissor
            </NavLink>
          </nav>
          {/* Navigation */}
        </div>

        <div className="Pg-content pt-3 ">
          <div className="w-1/2 flex flex-col items-center ">
            <h1 className="text-white font-thin font-teko text-4xl tracking-widest text-center">
              PLAY NOW !
            </h1>
            <div className="text-center text-white ">
              <div className="font-teko text-9xl font-extrabold text-center">
                V-LITE
              </div>
              <div className="font-teko text-9xl font-extrabold text-center">
                GAMING
              </div>
            </div>
            <div className="pl-48 pr-24 text-left text-white font-mons text-base font-semibold">
              V-Lite is a web based application designed to provide users with
              an engaging games like TIC TAC TOE, MEMORY CARD GAME,WORD GUESSING
              GAME, ROCK PAPER SCIRRORS GAME
            </div>
            <Link
              to="https://playtictactoe.org/"
              className="bg-[#ff1dd7] text-3xl font-semibold px-4 py-3 font-teko text-white 
              text-center my-5
            "
            >
              PLAY NOW
            </Link>
          </div>
        </div>

        {/* Game console image added by using POSITION property*/}
        <div className="absolute right-0 bottom-0 z-10">
          <img src={console} alt="" className="lg:w-[32rem]" />
        </div>
        {/* GroupFriends image added by using POSITION property */}
        <div className="absolute  bottom-8 rotate-[15deg] right-[300px]">
          <img src={friendsImg} alt="" className="lg:w-[16rem]" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
