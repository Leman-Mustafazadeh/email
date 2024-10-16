import { AUTH_KEY } from "../authConstant";
import { instance } from "../instance";

export const logoutService = async (data) => {
  const responce = await instance.post(AUTH_KEY.logout, data);
  return responce.data;
};