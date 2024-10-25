import { instance } from "../../instance";
import { AUTH_KEY } from "../../constant";

export const logoutService = async (token) => {
  const response = await instance.post(
    AUTH_KEY.logout,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    }
  );
  return response.data;
};
