import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import { destinations } from '../constants/destinations';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';
import { today, tomorrow } from '../constants/datetime';
import dayjs, { Dayjs } from 'dayjs';
import { Destination } from '../types';
import { MOBILE_VIEW_BREAKPOINT } from '../constants/breakpoints';
import { SEARCH_QUERY_KEY } from '../constants/localStorage';
import { HOTELS_LIST } from '../constants/urls';

const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;

  @media(max-width: ${MOBILE_VIEW_BREAKPOINT}px) {
    flex-direction: column;
    
    .MuiFormControl-root {
      margin-bottom: 20px;

      .MuiAutocomplete-root {
        width: 100%;
      }
    }
  }
`;

const SubmitButtonWrapper = styled(Button)`
  display: block;
  margin: auto;
`;

/**
 * Hotel search form
 */
export const SearchForm = () => {
  const [checkInTime, setCheckInTime] = React.useState<Dayjs | null>(today);
  const [checkOutTime, setCheckOutTime] = React.useState<Dayjs | null>(tomorrow);
  const [destination, setDestination] = React.useState<Destination | null>(null);
  const [amountOfPeople, setAmountOfPeople] = React.useState<string | null>(null);

  const submitHandler = React.useCallback((event: React.FormEvent) => {
    event.preventDefault();

    localStorage.setItem(SEARCH_QUERY_KEY, destination?.name ?? '');
    location.href = HOTELS_LIST;
  }, [destination]);

  return (
    <form onSubmit={submitHandler}>
      <FieldWrapper>
        <FormControl>
          <Autocomplete
            disablePortal
            id="destination"
            options={destinations}
            sx={{ width: 250 }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Destination" />}
            value={destination}
            onChange={(event, newValue: Destination | null) => setDestination(newValue)}
          />
        </FormControl>

        <FormControl>
          <DatePicker
            label="Check-in"
            disablePast
            defaultValue={today}
            value={checkInTime}
            onChange={(value) => setCheckInTime(value)}
            maxDate={dayjs(checkOutTime).subtract(1, 'day')}
          />
        </FormControl>

        <FormControl>
          <DatePicker
            label="Check-out"
            disablePast
            defaultValue={tomorrow}
            value={checkOutTime}
            onChange={(value) => setCheckOutTime(value)}
            minDate={dayjs(checkInTime).add(1, 'day')}
          />
        </FormControl>

        <FormControl>
          <OutlinedInput
            placeholder="Amount of people"
            type="number"
            value={amountOfPeople}
            onChange={(event) => setAmountOfPeople(event.target.value)}
          />
        </FormControl>
      </FieldWrapper>

      <SubmitButtonWrapper
        variant="contained"
        type="submit"
        size="large"
        disabled={!(checkInTime && checkOutTime && destination && amountOfPeople)}
      >
        Search
      </SubmitButtonWrapper>
    </form>
  );
}
