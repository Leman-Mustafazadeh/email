import axios from "axios";
import { BASE_URL } from "./authConstants.js";

export const apiEndpoints = {
  getAll: (endpoint) => `${BASE_URL}${endpoint}`,
  getOne: (endpoint, id) => `${BASE_URL}${endpoint}/${id}`,
  post: (endpoint) => `${BASE_URL}${endpoint}`,
  delete: (endpoint, id) => `${BASE_URL}${endpoint}/${id}`,
  put: (endpoint, id) => `${BASE_URL}${endpoint}/${id}`,
  patch: (endpoint, id) => `${BASE_URL}${endpoint}/${id}`,
};

export const apiController = {
  async getAll(endpoint) {
    const { data } = await axios.get(apiEndpoints.getAll(endpoint));
    return data;
  },

  async getOne(endpoint, id, token) {
    const { data } = await axios.get(apiEndpoints.getOne(endpoint, id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },

  async post(endpoint, payload, token) {
    const { data } = await axios.post(apiEndpoints.post(endpoint), payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },

  async delete(endpoint, id, token) {
    const { data } = await axios.delete(apiEndpoints.delete(endpoint, id), {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  },

  async put(endpoint, id, payload) {
    const { data } = await axios.put(apiEndpoints.put(endpoint, id), payload);
    return data;
  },

  async patch(endpoint, id, payload, token) {
    const { data } = await axios.patch(
      apiEndpoints.patch(endpoint, id),
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  },
};
