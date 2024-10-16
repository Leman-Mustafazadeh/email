import {  GET_KEY } from "../authConstant";
import { instance } from "../instance";

export const signaturepost = async (data) => {
  const responce = await instance.post(GET_KEY.addsignature, data);
  return responce.data;
};
