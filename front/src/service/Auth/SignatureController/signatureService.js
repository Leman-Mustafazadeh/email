import {  GET_KEY } from "../authConstant";
import { instance } from "../instance";

export const signatureService = async (data) => {
  const responce = await instance.getAll(GET_KEY.signature, data);
  return responce.data;
};
