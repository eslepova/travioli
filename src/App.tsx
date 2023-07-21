import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { SearchScreen } from './components/SearchScreen';
import { SearchResultScreen } from './components/SearchResultScreen';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { HOTELS_LIST, ROOT_URL } from './constants/urls';

const router = createBrowserRouter([
  {
    path: ROOT_URL,
    element: <SearchScreen />
  },
  {
    path: HOTELS_LIST,
    element: <SearchResultScreen />
  },
], {
  basename: '/travioli'
});

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
