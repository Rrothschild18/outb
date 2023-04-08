import api from "./index";

export const outcomesList = async () => {
  const response = await api({
    url: "outcomesPatients",
    method: "GET",
    params: {
      limit: 10,
      page: 1,
    },
  });

  const parsedPatients = response.data.map((outcomePatient) => ({
    name: outcomePatient.name,
    formId: outcomePatient.formId || null,
    id: outcomePatient.id,
    TIPO_CASO: outcomePatient.TIPO_CASO,
  }));

  const newResponse = { ...response, data: parsedPatients };

  return newResponse;
};

export const outcomesFields = () => {
  return api({
    url: `outcomesFields`,
    method: "GET",
  });
};

export const createOutcomePatient = (data) => {
  return api({
    url: "outcomesPatients",
    data,
    method: "POST",
  });
};
