import { PUT_KEY } from "../../constant";
import { instance } from "../../instance";

export const signatureUpdate = async (data) => {
    const responce = await instance.put(PUT_KEY.createUpdate, data);
    return responce.data;
  };
