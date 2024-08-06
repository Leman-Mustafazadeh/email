import axios from 'axios';

import { AUTH_KEY } from './authConstants';

const authApi = {
    async register(payload) {
      const { data } = await axios.post(AUTH_KEY.register, payload);
      return data;
    },
};

export default authApi;
