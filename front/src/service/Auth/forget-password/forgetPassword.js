import { AUTH_KEY } from "../authConstant";
import { instance } from "../instance";

export const forgetPassword = async (data) => {
  const responce = await instance.post(AUTH_KEY["forget-password"], data);
  return responce.data;
};