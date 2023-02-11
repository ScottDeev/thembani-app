import http from "../axios-config";

export const getNuibToken = async () => http.get("token");
export const requestCacc = async () => http.get("cacc");

export const generateNuit = async (data) =>
  http.post("onboarding", data, {
    Headers: {
      "'Content-Type'": "multipart/form-data",
    },
  });

export const getResponse = async (id) =>
  http.get(`get-response?messageID=${id}`);

export const kycApi = async (data) => http.post("kyc", data, {
  Headers: {
    "'Content-Type'": "multipart/form-data",
  },
});

export const loanOnboardingApi = async (data) => http.post("loan", data, {
  Headers: {
    "'Content-Type'": "multipart/form-data",
  },
});
