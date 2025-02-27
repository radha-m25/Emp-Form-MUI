import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EmployeeForm from "../components/employeeForm/EmployeeForm";

// Create the router configuration using createBrowserRouter
const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/form",
        element: <EmployeeForm/>
    }
]);


export default AppRouter;