import { paths } from "../../utils/constants/api-paths";
import { instance } from "../instance";

export const loginServices = async (data) =>
  await instance.post(paths.login, data);
