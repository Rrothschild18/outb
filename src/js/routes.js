import SplashPage from "../pages/splash.vue";
import HomePage from "../pages/home.vue";
import NotFoundPage from "../pages/404.vue";
import FirstAccess from "../pages/firstAccess.vue";
import Login from "../pages/login.vue";
import PatientStatus from "../pages/patients/patientStatus.vue";
import PatientSingle from "../pages/patients/patientSingle.vue";
import PatientList from "../pages/patients/patientList.vue";
import PatientCreate from "../pages/patients/patientCreate.vue";

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
    path: "/patient/new",
    component: PatientCreate,
  },
  {
    name: "PatientList",
    path: "/patients/",
    component: PatientList,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
