import React from "react";
import { Box, Typography } from "@mui/material";

const SelectedContacts = ({ selectedContact, setSelectedContacts }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h6">Selected Contact Details</Typography>
      <Box sx={{ marginTop: 2 }}>
        <Typography>First Name: {selectedContact.firstName}</Typography>
        <Typography>Last Name: {selectedContact.lastName}</Typography>
        <Typography>Email: {selectedContact.email}</Typography>
        <Typography>Phone: {selectedContact.phone}</Typography>
        <Typography>Address: {selectedContact.address || "N/A"}</Typography>
        <Typography>City: {selectedContact.city || "N/A"}</Typography>
        <Typography>State: {selectedContact.state || "N/A"}</Typography>
        <Typography>Zip Code: {selectedContact.zip || "N/A"}</Typography>
      </Box>
    </Box>
  );
};

export default SelectedContacts;
