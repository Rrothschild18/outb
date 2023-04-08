import SplashPage from "../pages/splash.vue";
import HomePage from "../pages/home.vue";
import NotFoundPage from "../pages/404.vue";
import FirstAccess from "../pages/firstAccess.vue";
import Algorithms from "../pages/algorithms.vue";
import Login from "../pages/login.vue";

//Patient
import PatientStatus from "../pages/patients/patientStatus.vue";
import PatientCreate from "../pages/patients/patientCreate.vue";
import PatientSingle from "../pages/patients/patientSingle.vue";
import PatientList from "../pages/patients/patientList.vue";

import OutcomeHome from "../pages/algorithms/outcomes/outcomeHome.vue";
import OutcomesList from "../pages/algorithms/outcomes/outcomesList.vue";
import OutcomeForm from "../pages/algorithms/outcomes/outcomeForm.vue";

var routes = [
  {
    path: "/",
    component: SplashPage,
  },
  {
    path: "/first/",
    component: FirstAccess,
  },
  {
    path: "/login/",
    component: Login,
  },
  {
    path: "/home/",
    component: HomePage,
  },
  {
    name: "PatientStatus",
    path: "/status/:id",
    component: PatientStatus,
  },
  {
    name: "PatientCreate",
    path: "/patients/new",
    component: PatientCreate,
  },
  {
    name: "PatientEdit",
    path: "/patients/:id/edit",
    component: PatientCreate,
  },
  {
    name: "PatientSingle",
    path: "/patients/:id",
    component: PatientSingle,
  },
  {
    name: "PatientList",
    path: "/patients/",
    component: PatientList,
  },
  {
    name: "AlgorithmsList",
    path: "/algorithms/",
    component: Algorithms,
  },
  {
    name: "OutcomeHome",
    path: "/algorithms/:id/",
    component: OutcomeHome,
    children: [
      // {
      //   name: "OutcomesList",
      //   path: "outcomes",
      //   component: OutcomesList,
      // },
    ],
  },
  {
    name: "OutcomesList",
    path: "/algorithms/:id/outcomes",
    component: OutcomesList,
  },
  {
    name: "OutcomeForm",
    path: "/algorithms/:id/outcomes/create",
    component: OutcomeForm,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
