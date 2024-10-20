import { AUTH_KEY } from "../../constant";
import { instance } from "../../instance";

export const loginService = async (data) => {
  const responce = await instance.post(AUTH_KEY.login, data);
  return responce.data;
};
