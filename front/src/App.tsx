import { Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AdminPage, JudgesPage, Layout, MainPage, PrivateRoute, UserIdPage, UsersPage } from "./lazy-pages/pages";

import { useDispatch,  } from 'react-redux';
import { AppDispatch } from './store/store';
import { getUserProfileId } from "./store/slices/getProfile/getProfileSlice";

export const App = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const userLocal = localStorage.getItem("user");
    if (userLocal) {
        const { id } = JSON.parse(userLocal);
        dispatch(getUserProfileId(id))
    }
}, [dispatch])

  return (
    <BrowserRouter>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />

            <Route element={<PrivateRoute allowedRoles={["ADMIN"]} />}>
              <Route path="admin" element={<AdminPage />}>
                <Route index element={<Navigate to="users" replace />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="users/:id" element={<UserIdPage />} />
                <Route path="judges" element={<JudgesPage />} />
              </Route>
            </Route>
            
          </Route>
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
