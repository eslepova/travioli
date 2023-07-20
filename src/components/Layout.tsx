import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

/**
 * Common page layout
 */
export const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <Container>
        <Typography
          align='center'
          variant='h1'
        >
          Travioli
        </Typography>
        {children}
    </Container>
  );
}
