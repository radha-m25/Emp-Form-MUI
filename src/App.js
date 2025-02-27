import { Button } from '@mui/material'; // Import Button component from Material-UI
import './App.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation
import { GlobalStyles } from '@mui/styled-engine'; // Import GlobalStyles for global CSS

function App() {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Function to handle button click and navigate to the EmployeeForm
  const handleForm = () => {
    navigate("/form"); // Navigate to the /form route
  }

  return (
    <div style={{
      display: 'flex', // Use flexbox for layout
      flexDirection: 'column', // Arrange children in a column
      alignItems: 'center', // Center children horizontally
      justifyContent: 'center', // Center children vertically
      minHeight: '100vh', // Take full viewport height
      textAlign: 'center' // Center text
    }}>
      {/* Apply global styles to the body for a gradient background */}
      <GlobalStyles styles={{ body: { background: 'linear-gradient(135deg, #005EB8, rgb(82, 195, 230))' } }} />
      
      {/* Heading with white text color and bottom margin */}
      <h3 style={{ color: 'white', marginBottom: '20px' }}>
        Please click the button below to fill out the Employee Form.
      </h3>
      
      {/* Button with custom style to navigate to the Employee Form */}
      <Button style={{ background: 'white', fontWeight: 'bold' }} onClick={handleForm}>
        Employee Form
      </Button>
    </div>
  );
}

export default App; // Export the App component as the default export