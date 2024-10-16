import {  GET_KEY } from "../../Auth/authConstant";
import { instance } from "../../Auth/instance";

export const priceService = async (data) => {
  const responce = await instance.getAll(GET_KEY.pricing, data);
  return responce.data;
};
