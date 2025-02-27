// Import createBrowserRouter from react-router-dom using CommonJS syntax
const { createBrowserRouter } = require("react-router-dom");

// Import the main App component using CommonJS syntax
const { default: App } = require("../../App");

// Import the EmployeeForm component using CommonJS syntax
const { default: EmployeeForm } = require("../employeeForm/EmployeeForm");

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