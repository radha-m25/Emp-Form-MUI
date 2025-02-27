# Employee Form Application

This project is a web-based application that provides an employee form to collect information. The form includes fields for first name, last name, middle name, date of birth, phone number, email, hobbies, and address. The project uses React for the frontend and Material-UI for styling components. React Router is used for navigation between the home page and the form page.

## Table of Contents

- [Getting Started](#getting-started)
- [Form Validation](#form-validation)
- [Styling](#styling)
- [Navigation](#navigation)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/employee-form-app.git
    cd employee-form-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

The application will be running at `http://localhost:3000`.

## Form Validation
The form validation logic is implemented in the useForm custom hook located at src/hooks/useForm.js. The following fields are validated:

First name, Last name, and Address: Required fields that cannot be empty.
Date of Birth (DOB): Must be in the format DD/MM/YYYY and represent a valid date.
Phone Number: Must be exactly 10 digits long.
Email: Must be in a valid email format.
These validations ensure that users provide the correct information before submission.

## Styling
Global and component-specific styles are applied using CSS and Material-UI:

1. Global Styles: Defined in App.css and applied to the body for a gradient background and full-height layout.
Component Styles: Specific styles for the EmployeeForm component are defined in EmployeeForm.css.
Inline styles and Material-UI Button component are used in App.js to style the home page elements and form button.

## Navigation
React Router is used to handle navigation:

1. Home Page (/): Renders the main App component, which includes a heading and a button to navigate to the employee form.
2. Form Page (/form): Renders the EmployeeForm component, which includes the form to collect employee information.