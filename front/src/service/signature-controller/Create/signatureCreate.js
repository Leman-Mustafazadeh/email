import { instance } from "../../instance";
import { GET_KEY } from "../../constant";

export const signatureCreate = async (data) => {
  const responce = await instance.post(GET_KEY.addsignature, data);
  return responce.data;
};
