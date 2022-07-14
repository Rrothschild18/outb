import SplashPage from "../pages/splash.vue";
import HomePage from "../pages/home.vue";
import NotFoundPage from "../pages/404.vue";

var routes = [
  {
    path: "/",
    component: SplashPage,
  },
  {
    path: "/home/",
    component: HomePage,
  },
  {
    path: "(.*)",
    component: NotFoundPage,
  },
];

export default routes;
