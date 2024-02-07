import HomePage from "./HomePage/HomePage"
import { Routes,Route } from "react-router-dom"
import MemoryCard from "./GamesSection/MemoryCard/MemoryCard"
import RockPaper from "./GamesSection/RockPaper/RockPaper"
import TicTacToe from "./GamesSection/TicTacToe/TicTacToe"
import WordGuessing from "./GamesSection/WordGuessing/WordGuessing"

function App() {
  return (
    <>
      <Routes>
      <Route path="/"  element={<HomePage/>}/>
      <Route path="/memory"  element={<MemoryCard/>}/>
      <Route path="/rockpaper"  element={<RockPaper/>}/>
      <Route path="/wordguess"  element={<WordGuessing/>}/>
      <Route path="/tictactoe"  element={<TicTacToe/>}/>
        
      </Routes>
    </>
  )
}

export default App
