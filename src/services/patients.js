import api from "./index";

export const createPatient = () => {};

export const editPatient = () => {};

export const deletePatient = () => {};

export const patientFields = () => {
  return api({
    url: `patientFields`,
    method: "GET",
  });
};
