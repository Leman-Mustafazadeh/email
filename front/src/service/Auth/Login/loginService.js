import { instance } from "../instance";
import { AUTH_KEY } from "../authConstant";

export const loginService = async (data) => {
  const responce = await instance.post(AUTH_KEY.login, data);
  return responce.data;
};
