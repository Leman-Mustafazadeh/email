import { instance } from "../../instance";
import { AUTH_KEY } from "../../constant";

export const logoutService = async (data) => {
  const responce = await instance.post(AUTH_KEY.logout, data);
  return responce.data;
};