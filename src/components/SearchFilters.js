import React, { useState } from "react";
import {
  TextField,
  Box,
  MenuItem,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

// List of US states
const states = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const SearchFilters = ({ filters, onFilterChange, onSearch }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    // Add error state for dob
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters({ ...localFilters, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Phone number validation regex (basic US phone number format)
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "email" && value && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address.",
      }));
    }

    if (name === "phone" && value && !validatePhone(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone number must be of 10 digits.",
      }));
    }
  };
  // Trigger search on button click
  const handleSearch = () => {
    onFilterChange(localFilters);
  };

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="subtitle1" gutterBottom>
        Search for a contact
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4}>
          <TextField
            label="First Name"
            name="firstName"
            variant="outlined"
            value={localFilters.firstName}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            label="Last Name"
            name="lastName"
            variant="outlined"
            value={localFilters.lastName}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date of Birth"
              name="dob"
              onChange={(newDate) =>
                setLocalFilters({ ...localFilters, dob: newDate })
              }
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            label="Email Address"
            name="email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email}
            value={localFilters.email}
            onBlur={handleBlur}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            label="Phone Number"
            name="phone"
            variant="outlined"
            value={localFilters.phone}
            onChange={handleFilterChange}
            error={!!errors.phone}
            onBlur={handleBlur}
            helperText={errors.phone}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            label="Address"
            name="address"
            variant="outlined"
            value={localFilters.address}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            label="City"
            name="city"
            variant="outlined"
            value={localFilters.city}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            label="State"
            name="state"
            value={localFilters.state}
            onChange={handleFilterChange}
            select
            fullWidth
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            label="Zip Code"
            name="zipCode"
            variant="outlined"
            value={localFilters.zipCode}
            onChange={handleFilterChange}
            fullWidth
          />
        </Grid>
      </Grid>

      <Button
        disabled={errors.phone || errors.email}
        variant="contained"
        onClick={handleSearch}
        sx={{ marginTop: 2 }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchFilters;
