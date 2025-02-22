import axios from "axios";

export const get = (url: string, params?: object) => {
  const u = new URL(url);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      u.searchParams.set(key, value);
    });
  }
  return axios.get(u.toString());
};
