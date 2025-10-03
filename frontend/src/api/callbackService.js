import API from "./axios";

// Send callback request
export const sendCallbackRequest = (payload) => {
  return API.post("/api/callback/", payload);
};
