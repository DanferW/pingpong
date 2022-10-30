import axios from "axios";

export const getGames = async () => {
  return await axios.get("http://localhost:4000/games");
};

export const saveGame = async (game) => {
  await axios.post("http://localhost:4000/sgame", game);
};
