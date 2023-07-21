import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from './Layout';
import { HotelCard } from './HotelCard';
import { SEARCH_QUERY_KEY } from '../constants/localStorage';
import { HOTEL_LIST } from '../mock/hotels';
import { HotelType } from '../types';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { default as UILink } from '@mui/material/Link';

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

/**
 * Hotel list page
 */
export const SearchResultScreen = () => {
  const [hotelList, setHotelList] = React.useState<HotelType[]>([]);
  const [finishedLoading, setFinisehdLoading] = React.useState(false);

  React.useEffect(() => {
    const selectedCity = localStorage.getItem(SEARCH_QUERY_KEY)?.toLowerCase();

    setHotelList(HOTEL_LIST.filter((hotel) => hotel.city.toLowerCase() === selectedCity));
    setFinisehdLoading(true);
  }, []);

  return (
    <Layout>
        {finishedLoading && !hotelList.length && (
          <Typography
            align='center'
            variant='h4'
            sx={{margin: '50px'}}
          >
            Nothing was found according to your request.{' '}
            <UILink><Link to='..'>Back to search page</Link></UILink>
          </Typography>
        )}
        {hotelList.map((hotel) => (
          <CardWrapper>
            <HotelCard {...hotel} />
          </CardWrapper>
        ))}
    </Layout>
  );
}
