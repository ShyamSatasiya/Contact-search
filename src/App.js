import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ContactTable from "./components/ContactTable";
import SelectedContacts from "./components/SelectedContacts";
import contactsData from "./data.json"; // Import data from JSON file

const App = () => {
  const [contacts] = useState(contactsData); // Load contacts from JSON
  const [selectedContacts, setSelectedContacts] = useState();

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Contact Search
      </Typography>

      {/* Contact Table */}
      <ContactTable
        contacts={contacts}
        selectedContacts={selectedContacts}
        setSelectedContacts={setSelectedContacts}
      />

      {/* Selected Contacts */}
      {selectedContacts && (
        <SelectedContacts
          selectedContact={selectedContacts}
          setSelectedContacts={setSelectedContacts}
        />
      )}
    </Box>
  );
};

export default App;
