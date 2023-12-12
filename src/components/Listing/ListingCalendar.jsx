import React, { useState, useEffect } from 'react'
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import { Grid, TextField } from '@mui/material';

const pastMonth = new Date();

const defaultSelected = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
};

const ListingCalendar = () => {
    const [range, setRange] = useState(defaultSelected);

    let footer = (
        <Grid container spacing={0.5}>
            <Grid item xs={6}>
                <TextField 
                    id="checkin" 
                    label="Check-in" 
                    variant="outlined"
                    size="small"
                    color="primary"
                    value={range?.from ? format(range.from, 'P') : ""}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField 
                    id="checkin" 
                    label="Check-out" 
                    variant="outlined"
                    size="small"
                    color="primary"
                    value={range?.to ? format(range.to, 'P') : ""}
                />
            </Grid>
        </Grid>
    );

    return (
        <DayPicker
            mode="range"
            defaultMonth={pastMonth}
            selected={range}
            onSelect={setRange}
            footer={footer}
        />
    )
}

export default ListingCalendar