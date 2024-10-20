import {  GET_KEY } from "../../constant";
import { instance } from "../../instance";

export const priceService = async (data) => {
  const responce = await instance.getAll(GET_KEY.pricing, data);
  return responce.data;
};
