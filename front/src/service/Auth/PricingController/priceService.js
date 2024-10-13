import {  GET_KEY } from "../authConstant";
import { instance } from "../instance";

export const priceService = async (data) => {
  const responce = await instance.getAll(GET_KEY.price, data);
  return responce.data;
};
