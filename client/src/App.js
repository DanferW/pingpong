import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage.jsx";
import Game from "./pages/Game.jsx";
import ListUsers from "./pages/ListUsers.jsx";
import NewGame from "./pages/NewGame.jsx";
import ListGames from "./pages/ListGames.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/game" element={<Game />} />
      <Route path="/users" element={<ListUsers />} />
      <Route path="/newgame" element={<NewGame />} />
      <Route path="/games" element={<ListGames />} />
    </Routes>
  );
}

export default App;
