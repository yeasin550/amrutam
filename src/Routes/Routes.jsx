import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import FindDoctors from "../Components/FindDoctorsContent/FindDoctors";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DoctorProfile from "../Components/HomeContent/DoctorProfile/DoctorProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/find-doctor",
                element: <FindDoctors/>
            },
            {
                path: "/profile",
                element: <DoctorProfile />
            }
        ]
    },
]);
export default router;