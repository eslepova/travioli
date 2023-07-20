import * as React from 'react';
import Card from '@mui/material/Card';
import styled from '@emotion/styled';
import { HotelType } from '../types';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const CardWrapper = styled(Card)`
  max-width: 500px;
  padding: 20px;
  margin: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ParagraphWrapper = styled.p`
  margin-bottom: 0;
`;

/**
 * Information about a hotel
 */
export const HotelCard = ({
  name,
  address,
  city,
  state,
  country_code,
  phone_number,
  hotel_rating
}: HotelType) => {
  return (
    <CardWrapper>
      <TitleContainer>
        <Typography variant="h6">
          {name}
        </Typography>
        <Rating value={hotel_rating} readOnly />
      </TitleContainer>

      <ParagraphWrapper>{`${address}, ${city}, ${state ? state+', ': ''}${country_code}`}</ParagraphWrapper>
      {phone_number && <ParagraphWrapper>{phone_number}</ParagraphWrapper>}
    </CardWrapper>
  );
}
