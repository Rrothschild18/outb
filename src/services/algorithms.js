import api from "./index";

export const algorithmsList = () => {
  return api({
    url: "algorithm",
    method: "GET",
    params: {
      limit: 10,
      page: 1,
    },
  });
};
