import { instance } from "../../instance";
import { AUTH_KEY } from "../../constant";

export const resetPassword = async (data) => {
  try {
    const response = await instance.post(AUTH_KEY["reset-password"], data);
    return response.data;
  } catch (error) {
    console.error('Full error object:', error);
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
      console.error('Error headers:', error.response.headers);
    }
    throw error;
  }
};
