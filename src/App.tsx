import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SearchScreen } from './components/SearchScreen';
import { SearchResultScreen } from './components/SearchResultScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchScreen />
  },
  {
    path: "/hotels",
    element: <SearchResultScreen />
  },
]);

/**
 * Root component
 */
export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}
