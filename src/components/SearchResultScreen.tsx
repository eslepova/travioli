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
import InfiniteScroll from 'react-infinite-scroll-component';

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const Informer = styled.p`
  width: fit-content;
  margin: auto;
  font-weight: bold;
  margin-bottom: 20px;
`;

const QTY_PER_ROW = 10;

/**
 * Hotel list page
 */
export const SearchResultScreen = () => {
  const [fullHotelList, setFullHotelList] = React.useState<HotelType[]>([]);
  const [finishedLoadingFullHotelList, setFinisehdLoadingFullHotelList] = React.useState(false);
  const [loadedHotels, setLoadedHotels] = React.useState<HotelType[]>([]);

  const fetchMoreData = () => {
    setTimeout(() => {
      setLoadedHotels([...loadedHotels, ...fullHotelList.slice(loadedHotels.length, loadedHotels.length + QTY_PER_ROW)]);
    }, 500);
  };

  React.useEffect(() => {
    const selectedCity = localStorage.getItem(SEARCH_QUERY_KEY)?.toLowerCase();

    const filteredHotelList = HOTEL_LIST.filter((hotel) => hotel.city.toLowerCase() === selectedCity);
    setFullHotelList(filteredHotelList);
    setLoadedHotels(filteredHotelList.slice(0, QTY_PER_ROW));
    setFinisehdLoadingFullHotelList(true);
  }, []);

  return (
    <Layout>
        {finishedLoadingFullHotelList && !fullHotelList.length && (
          <Typography
            align='center'
            variant='h4'
            sx={{margin: '50px'}}
          >
            Nothing was found according to your request.{' '}
            <UILink><Link to='..'>Back to search page</Link></UILink>
          </Typography>
        )}
        {fullHotelList.length ? <InfiniteScroll
          dataLength={loadedHotels.length}
          next={fetchMoreData}
          hasMore={loadedHotels.length < fullHotelList.length}
          loader={<Informer>Loading...</Informer>}
          endMessage={<Informer>No more data to load.</Informer>}
        >
          {loadedHotels.map((hotel) => (
            <CardWrapper key={hotel.id}>
              <HotelCard {...hotel} />
            </CardWrapper>
          ))}
        </InfiniteScroll> : ''}
    </Layout>
  );
}
