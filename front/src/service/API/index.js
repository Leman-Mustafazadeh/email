import axios from "axios";
import { BASE_URL } from "./constant.js";

//get all
export async function getAll(endpoint) {
  try {
    const response = await axios.get(BASE_URL + endpoint, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

//get one
export async function getOne(endpoint, id, token) {
  
  try {
    const response = await axios.get(BASE_URL + endpoint + `/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

//post
export async function post(endpoint, payload, token) {
  try {
    const response = await axios.post(BASE_URL + endpoint, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

//delete
export async function deleteOne(endpoint, id, token) {
  try {
    const response = await axios.delete(BASE_URL + endpoint + `/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

//put
export async function put(endpoint, id, payload) {
  try {
    const response = await axios.put(BASE_URL + endpoint + `/${id}`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
}

//patch
export async function patch(endpoint, id, payload, token) {
  try {
    const response = await axios.patch(
      BASE_URL + endpoint + `/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

// login

const controller = {
  post: post,
  getAll: getAll,
  getOne: getOne,
  delete: deleteOne,
  put: put,
  patch: patch,
};

export default controller;

// ===========================================================

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

