import { lazy } from "react";


export const Layout = lazy(() =>
  import("../components/Layout/Layout").then((module) => ({
    default: module.Layout,
  }))
);

export const MainPage = lazy(() =>
  import("../pages/mainPage/mainPage").then((module) => ({
    default: module.MainPage,
  }))
);

export const AdminPage = lazy(() =>
  import("../pages/adminPage/adminPage").then((module) => ({
    default: module.AdminPage,
  }))
);