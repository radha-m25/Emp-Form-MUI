import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EmployeeForm from "../components/employeeForm/EmployeeForm";

// Create the router configuration using createBrowserRouter
const AppRouter = createBrowserRouter([
    {
        path: "/", // Root path
        element: <App/> // Render the App component at the root path
    },
    {
        path: "/form", // Path for the employee form
        element: <EmployeeForm/> // Render the EmployeeForm component at /form path
    }
]);

// Export the router configuration as the default export
export default AppRouter;