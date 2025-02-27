import { useState } from "react";

const useForm = () => {
    // State to manage the form data
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        phoneNumber: '',
        email: '',
        hobbies: '',
        address: ''
    });

    // State to manage form validation errors
    const [errors, setErrors] = useState({});
    
    // State to handle the Snackbar open/close
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    
    // State to manage the Snackbar alert message
    const [alertMessage, setAlertMessage] = useState('');

    // Function to handle form input changes
    const handleChange = ({ target: { name, value } }) => {
        // Update the form data state
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
        validateField(name, value); // Validate the field on change
    };

    // Function to validate email format
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Function to validate date format and validity (DD/MM/YYYY)
    const validateDate = (dob) => {
        const re = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!re.test(dob)) {
            return false;
        }
        const [day, month, year] = dob.split('/').map((val) => parseInt(val, 10));
        const date = new Date(year, month - 1, day);
        return (
            date.getFullYear() === year &&
            date.getMonth() + 1 === month &&
            date.getDate() === day
        );
    };

    // Function to validate individual fields
    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'firstName':
            case 'lastName':
            case 'address':
                if (!value.trim()) {
                    error = 'Required'; // Field is required
                }
                break;
            case 'dob':
                if (!validateDate(value)) {
                    error = 'Invalid date format. Use DD/MM/YYYY.'; // Invalid date format
                }
                break;
            case 'phoneNumber':
                if (value.length !== 10 || isNaN(value)) {
                    error = 'Phone number must be 10 digits long.'; // Phone number must be exactly 10 digits
                }
                break;
            case 'email':
                if (!validateEmail(value)) {
                    error = 'Invalid email format.'; // Invalid email format
                }
                break;
            default:
                break;
        }
        // Update the errors state with the validation result
        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const validationErrors = Object.values(errors).filter((error) => error !== '');

        if (validationErrors.length > 0) {
            setAlertMessage('Mandatory field(s) missing or invalid.');
            setSnackbarOpen(true); // Open the Snackbar with an error message
            return;
        }

        alert('Data Saved Successfully');
        console.log('Form Data:', formData);
    };

    return {
        formData, // The current form data
        errors, // The current form validation errors
        snackbarOpen, // Snackbar open state
        setSnackbarOpen, // Function to set Snackbar open state
        alertMessage, // Snackbar alert message
        handleChange, // Function to handle form input changes
        handleSubmit // Function to handle form submission
    };
}

export default useForm;