import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SearchScreen } from './components/SearchScreen';

/**
 * Root component
 */
export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SearchScreen />
    </LocalizationProvider>
  );
}
