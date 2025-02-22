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

export const UsersPage = lazy(() =>
  import("../pages/usersPage/usersPage").then((module) => ({
    default: module.UsersPage,
  }))
);

export const JudgesPage = lazy(() =>
  import("../pages/judgesPage/judgesPage").then((module) => ({
    default: module.JudgesPage,
  }))
);