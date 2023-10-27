/* eslint-disable @typescript-eslint/no-unused-vars */
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";

export enum PathsRoutes {
    HOME = "/",
    USER = "/user"
}

const AppRoutes = () => {
    return (
      <Routes>
        <Route path={PathsRoutes.HOME} element={<Home />} />

        <Route path={PathsRoutes.USER} element={<User />} />
      </Routes>
    );
};

export default AppRoutes;
