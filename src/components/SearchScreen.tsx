import * as React from 'react';
import { SearchForm } from './SearchForm';
import { Layout } from './Layout';

/**
 * Hotel Search page
 */
export const SearchScreen = () => {
  return (
    <Layout>
        <SearchForm />
    </Layout>
  );
}
