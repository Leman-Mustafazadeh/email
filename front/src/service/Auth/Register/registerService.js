import { instance } from "../../instance";
import { AUTH_KEY } from "../../constant";

export const registerService = async (data) => {
  const responce = await instance.post(AUTH_KEY.register, data);
  return responce.data;
};
