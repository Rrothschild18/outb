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

export const patientById = (id) => {
  return api({
    url: `patients/${id}`,
    method: "GET",
  });
};

export const getStatusByPatientId = (id) => {
  console.log({ id });
  return api({
    url: `status`,
    method: "GET",
    params: {
      patientId: id,
    },
  });
};

export const newStatus = (data) => {
  return api({
    url: `status`,
    method: "POST",
    data,
  });
};

export const patchStatus = (data, id) => {
  return api({
    url: `status/${id}`,
    method: "PATCH",
    data,
  });
};

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
