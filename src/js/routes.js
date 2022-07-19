import SplashPage from "../pages/splash.vue";
import HomePage from "../pages/home.vue";
import NotFoundPage from "../pages/404.vue";
import FirstAccess from "../pages/firstAccess.vue";
import Login from "../pages/login.vue";
import PatientSingle from "../pages/patientSingle.vue";
import PatientDataSingle from "../pages/patientDataSingle.vue";
import PatientList from "../pages/patient-list.vue";

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
    path: "/patient/",
    component: PatientSingle,
  },
  {
    name: "patientDataSingle",
    path: "/patient/:id",
    component: PatientDataSingle,
  },
  {
    path: "/patients/",
    component: PatientList,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
