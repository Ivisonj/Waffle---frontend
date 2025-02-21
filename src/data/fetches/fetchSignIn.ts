import axios from "axios";
import { BASE_URL, API_V1 } from "../axios";

interface SignInProps {
  access_token: string;
  email: string;
  isAdmin: boolean;
}

export const fetchSignIn = async (email: string) => {
  const res = await axios.post<SignInProps>(
    `${BASE_URL}/${API_V1}/user/signin`,
    { email }
  );
  return res.data;
};
