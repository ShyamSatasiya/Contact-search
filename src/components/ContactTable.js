import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Box,
  Pagination,
} from "@mui/material";
import SearchFilters from "./SearchFilters";

const ContactTable = ({ contacts, selectedContacts, setSelectedContacts }) => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    filterContacts(newFilters); // Trigger filter immediately
  };

  const filterContacts = (filterCriteria) => {
    const filtered = contacts.filter((contact) => {
      return (
        (!filterCriteria.firstName ||
          contact.firstName
            .toLowerCase()
            .includes(filterCriteria.firstName.toLowerCase())) &&
        (!filterCriteria.lastName ||
          contact.lastName
            .toLowerCase()
            .includes(filterCriteria.lastName.toLowerCase())) &&
        (!filterCriteria.dob || contact.dob?.includes(filterCriteria.dob)) &&
        (!filterCriteria.email ||
          contact.email
            .toLowerCase()
            .includes(filterCriteria.email.toLowerCase())) &&
        (!filterCriteria.phone ||
          contact.phone.includes(filterCriteria.phone)) &&
        (!filterCriteria.address ||
          contact.address
            .toLowerCase()
            .includes(filterCriteria.address.toLowerCase())) &&
        (!filterCriteria.city ||
          contact.city
            .toLowerCase()
            .includes(filterCriteria.city.toLowerCase())) &&
        (!filterCriteria.state ||
          contact.state
            .toLowerCase()
            .includes(filterCriteria.state.toLowerCase())) &&
        (!filterCriteria.zip || contact.zip.includes(filterCriteria.zip))
      );
    });
    setFilteredContacts(filtered);
    setCurrentPage(1); // Reset to the first page on filter change
  };

  // Paginate results
  const paginatedContacts = filteredContacts.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Handle contact selection toggling
  const handleToggleSelection = (contact) => {
    // Set selectedContacts to only the clicked contact
    setSelectedContacts(contact);
  };

  return (
    <Box>
      {/* Search Filters */}
      <SearchFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={() => filterContacts(filters)} // Trigger search from here if needed
      />

      {/* Table */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zip Code</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedContacts.length > 0 ? (
              paginatedContacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedContacts?.id === contact.id} // Only one contact selected
                      onChange={() => handleToggleSelection(contact)}
                    />
                  </TableCell>
                  <TableCell>
                    {contact.firstName} {contact.lastName}
                  </TableCell>
                  <TableCell>{contact.dob || "N/A"}</TableCell>
                  <TableCell>{contact.address || "N/A"}</TableCell>
                  <TableCell>{contact.city || "N/A"}</TableCell>
                  <TableCell>{contact.state || "N/A"}</TableCell>
                  <TableCell>{contact.zip || "N/A"}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  No contacts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Pagination
        count={Math.ceil(filteredContacts.length / rowsPerPage)}
        page={currentPage}
        onChange={(event, value) => setCurrentPage(value)}
      />
    </Box>
  );
};

export default ContactTable;
