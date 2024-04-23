import React from "react";
import logo from "./assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import con from "./assets/Console.png";
import friendsImg from "./assets/friendImg.png";
import BgFrame from "./assets/bgFrame.png";


const HomePage = () => {
  var nav = useNavigate()
  const RandomGame = ()=>{
    var games = ['memory','rockpaper','wordguess','tictactoe']
    var randomGame = games[Math.floor(Math.random() * games.length)]
    nav(randomGame)
    
  }
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
            <NavLink to="/memory">
              Memory Card Game
            </NavLink>
            <NavLink to="/tictactoe">TIC TAC TOE</NavLink>
            <NavLink to="/wordguess">
              Word Guessing
            </NavLink>
            <NavLink to="/rockpaper">
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
            <button
            onClick={()=>RandomGame()}
              
              className="bg-[#ff1dd7] text-3xl font-semibold px-4 py-3 font-teko text-white 
              text-center my-5
            "
            >
              PLAY NOW
            </button>
          </div>
        </div>

        {/* Game con image added by using POSITION property*/}
        <div className="absolute right-0 bottom-0 z-10">
          <img src={con} alt="" className="lg:w-[32rem]" />
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
