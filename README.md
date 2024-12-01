# Contact Search Application

This is a contact search application that allows you to search, filter, and select contacts from a list. It provides the following features:

- **Search and Filter**: Allows users to search contacts by first name, last name, date of birth, email, phone, address, city, state, and zip code.
- **Single Contact Selection**: Enables the selection of a single contact from the search results and automatically updates the contact's details in the record below.
- **Pagination**: Displays search results in a paginated table format.

## Project Structure

```
src/
├── components/
    ├── SelectedContacts.js  # Displays the Selected Contact
│   ├── ContactTable.js      # Displays the table of contacts and handles filtering
│   ├── SearchFilters.js     # Provides the search and filter form for users
├── App.js                   # Main component that ties everything together
├── index.js                 # Entry point of the application
├── styles.css               # Global styles
├── README.md                # This file
```

## Features

### Search Filters

- **First Name**: Filters contacts by first name.
- **Last Name**: Filters contacts by last name.
- **Date of Birth**: Filters contacts by date of birth.
- **Email**: Filters contacts by email address.
- **Phone**: Filters contacts by phone number.
- **Address**: Filters contacts by address.
- **City**: Filters contacts by city.
- **State**: Filters contacts by state.
- **Zip Code**: Filters contacts by zip code.

### Pagination

- The search results are paginated with a maximum of 5 contacts per page.
- Users can navigate between pages using pagination controls.

### Contact Selection

- Only one contact can be selected at a time.
- When a contact is selected, its data is automatically updated in the record below, which includes:
    - Name
    - Email
    - Phone
    - Address (if applicable)

### Validation

- **Email Validation**: Ensures the email is in a valid format.
- **Phone Validation**: Ensures the phone number is of 10 digit.

## Setup and Installation

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (LTS version recommended)
- npm (Node Package Manager)

## Usage

### How to Use the Contact Search Application

1. **Search Contacts**: Use the filter inputs to enter values such as first name, last name, or email. Click the Search button to apply the filters.
2. **Select a Contact**: Click on the checkbox next to a contact’s name to select it. The contact’s details (name, email, phone, address) will be displayed in the section below the table.
3. **Navigate Pages**: Use the pagination controls to view more contacts if there are multiple pages of results.

## Dependencies

- `@mui/material`: Material-UI components for the UI design.
- `@mui/x-date-pickers`: Date pickers for filtering by date of birth.
- `react`: React library for building the user interface.
- `react-dom`: React DOM for rendering components in the browser.