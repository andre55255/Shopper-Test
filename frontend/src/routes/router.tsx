import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { PublicRoute } from "./public-route";
import { routesPages } from "../helpers/routes-pages";

import NotFoundPage from "../pages/public/not-found";
import HomePageComponent from "../components/page-component/home-page";
import UploadPage from "../pages/public/upload";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Public routes */}
            <Route element={<PublicRoute />}>
                <Route path={routesPages.home} element={<HomePageComponent />} />
                <Route path={routesPages.upload} element={<UploadPage />} />
            </Route>

            {/* Route Not Found */}
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
);

export default Router;
