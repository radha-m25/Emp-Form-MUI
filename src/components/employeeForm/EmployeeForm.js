
import React from "react";

import {
  TextField,
  Button,
  Grid,
  Container,
  Box,
  Snackbar,
  Alert,
  Card,
  CardContent,
  CardHeader,
  CssBaseline,
} from "@mui/material";
import { GlobalStyles } from "@mui/styled-engine";
import useForm from "../../hooks/useForm";
import { backArrow } from "../../assets/icons/icons";
import { useNavigate } from "react-router-dom";

const EmployeeForm = () => {
  // Destructure form-related states and handlers from useForm hook
  const {
    formData,
    errors,
    snackbarOpen,
    setSnackbarOpen,
    alertMessage,
    handleChange,
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const navigateToBack = () => {
    navigate("/");
  }

  return (
    <div>
      {/* CssBaseline provides a consistent baseline for all MUI components */}
      <CssBaseline />

      {/* GlobalStyles to apply a gradient background to the body */}
      <GlobalStyles
        styles={{
          body: {
            background: "linear-gradient(135deg, #005EB8,rgb(82, 195, 230))",
          },
        }}
      />

      {/* Center the form vertically and horizontally */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Container maxWidth="sm">
          <Card style={{ borderRadius: '25px' }}>
            {/* CardHeader with the form title */}
            <div style={{ display: "flex", marginLeft: '25px'}}>
              <img style={{cursor: 'pointer'}} src={backArrow} alt="back-arrow" onClick={navigateToBack}></img>
            <CardHeader
              title="EMPLOYEE FORM"
              sx={{ textAlign: "center", color: "#005EB8", fontWeight: "bold", flex: 1 , fontSize: "14px"}}
            />
            </div>

            {/* CardContent for the form fields */}
            <CardContent sx={{ p: 3 }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {/* First Name Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="firstName"
                      label="First Name"
                      fullWidth
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                    />
                  </Grid>

                  {/* Middle Name Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="middleName"
                      label="Middle Name"
                      fullWidth
                      value={formData.middleName}
                      onChange={handleChange}
                    />
                  </Grid>

                  {/* Last Name Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="lastName"
                      label="Last Name"
                      fullWidth
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                    />
                  </Grid>

                  {/* Date of Birth Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="dob"
                      label="Date of Birth (DD/MM/YYYY)"
                      fullWidth
                      required
                      value={formData.dob}
                      onChange={handleChange}
                      error={!!errors.dob}
                      helperText={errors.dob}
                    />
                  </Grid>

                  {/* Phone Number Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                      required
                      placeholder="10 digits only"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber}
                    />
                  </Grid>

                  {/* Email ID Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="email"
                      label="Email ID"
                      fullWidth
                      required
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                    />
                  </Grid>
                  
                  {/* Hobbies Field */}
                  <Grid item xs={12}>
                    <TextField
                      name="hobbies"
                      label="Hobbies"
                      fullWidth
                      value={formData.hobbies}
                      onChange={handleChange}
                    />
                  </Grid>

                  {/* Address Field */}
                  <Grid item xs={12}>
                    <TextField
                      name="address"
                      label="Address"
                      fullWidth
                      multiline
                      rows={4}
                      value={formData.address}
                      onChange={handleChange}
                      error={!!errors.address}
                      helperText={errors.address}
                    />
                  </Grid>

                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>

              {/* Snackbar for form submission status */}
              <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
              >
                <Alert
                  onClose={() => setSnackbarOpen(false)}
                  severity="success"
                >
                  {alertMessage}
                </Alert>
              </Snackbar>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </div>
  );
};

export default EmployeeForm;
