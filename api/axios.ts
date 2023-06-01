//@ts-nocheck
import axios from "axios";
import { getSession } from "next-auth/react";

export const BASE_URL = "http://localhost:8080";
export const LIVE_URL = "http://92.204.128.190:8080";
export const FRONTEND_URL = "http://92.204.128.190:4000";

export const baseURL =
  process.env.NEXT_PUBLIC_NODE_ENV === "production" ? LIVE_URL : BASE_URL;

export const client = axios.create({
  baseURL: baseURL,
});
axios.defaults.baseURL = baseURL;
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;
    const session = await getSession();
    console.log(session);
    if (
      error?.response?.status === 403 &&
      !config?.sent &&
      session.user.refreshToken
    ) {
      config.sent = true;

      const { data } = await client.post("/api/sessions/refresh", null, {
        headers: {
          "x-refresh": session.user.refreshToken,
        },
      });
      if (data?.accessToken) {
        config.headers = {
          ...config.headers,
          authorization: `Bearer ${data?.accessToken}`,
        };
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);
export const axiosPrivate = axios;
