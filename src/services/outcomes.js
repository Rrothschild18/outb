import api from "./index";

export const outcomesList = () => {
  return api({
    url: "outcomesList",
    method: "GET",
    params: {
      limit: 10,
      page: 1,
    },
  });
};

export const outcomesFields = () => {
  return api({
    url: `outcomesFields`,
    method: "GET",
  });
};
