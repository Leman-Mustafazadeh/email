import {  GET_KEY } from "../../Auth/authConstant";
import { instance } from "../../Auth/instance";

export const purchaseService = async (data) => {
  const responce = await instance.getAll(GET_KEY.purchase, data);
  return responce.data;
};
