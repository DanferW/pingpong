import axios from "axios";

export const getUsers = async () => {
  return await axios.get("http://localhost:4000/users");
};

export const saveUser = async (user) => {
  await axios.post("http://localhost:4000/suser", user);
};
