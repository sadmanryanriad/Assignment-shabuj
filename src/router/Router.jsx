import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import AdminDashboard from "../adminDashboard/AdminDashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "admin",
        element: <AdminDashboard></AdminDashboard>,
        errorElement: <ErrorPage></ErrorPage>
    }
]);

export default router;