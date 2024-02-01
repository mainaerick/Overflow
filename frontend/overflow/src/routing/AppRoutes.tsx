/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { PrivateRoutes } from "./PrivateRoutes";
import App from "../App";
import { AuthPage, Logout } from "../features/auth";
import { RootState } from "../setup/redux/RootReducer";
import { ErrorsPage } from "../features/errors/ErrorsPage";
// import {ErrorsPage} from '../modules/errors/ErrorsPage'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;
const AppRoutes: FC = () => {
  let isAuthorized:any = useSelector<RootState>(
    ({ auth }) => auth.user,
    shallowEqual
  );
  const username = isAuthorized?.user.username
  // isAuthorized = true
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} />
          {isAuthorized ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to="/home" />} />
            </>
          ) : (
            <>
              <Route path="auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
