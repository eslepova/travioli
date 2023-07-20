import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SearchForm } from './SearchForm';

/**
 * Hotel Search page
 */
export const SearchScreen = () => {
  return (
    <Container>
        <Typography
          align='center'
          variant='h1'
        >
          Travioli
        </Typography>
        <SearchForm />
    </Container>
  );
}
