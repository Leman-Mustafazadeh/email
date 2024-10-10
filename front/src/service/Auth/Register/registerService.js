import { AUTH_KEY } from "../authConstant";
import { instance } from "../instance";

export const registerService = async (data) => {
  const responce = await instance.post(AUTH_KEY.register, data);
  return responce.data;
};
