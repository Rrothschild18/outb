import api from "./index";

export const patientsList = () => {
  return api({
    url: "patients",
    method: "GET",
    params: {
      limit: 10,
      page: 1,
    },
  });
};

// export const patientsList = () => {
//   return api({
//     url: "patients",
//     method: "GET",
//   });
// };

export const createPatient = (data) => {
  return api({
    url: "patients",
    data,
    method: "POST",
  });
};

export const editPatient = () => {};

export const deletePatient = () => {};

export const patientFields = () => {
  return api({
    url: `patientFields`,
    method: "GET",
  });
};
