import React, { useState, useEffect } from 'react'
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';

const pastMonth = new Date(2020, 10, 15);

const defaultSelected = {
    from: pastMonth,
    to: addDays(pastMonth, 4)
};

const ListingCalendar = () => {
    const [range, setRange] = useState(defaultSelected);

    let footer = <p>Please pick the first day.</p>;
    if (range?.from) {
        if (!range.to) {
            footer = <p>{"Check-in: " + format(range.from, 'PPP')}</p>;
        } else if (range.to) {
            footer = (
            <>
                <p>
                    Check-in: {format(range.from, 'PPP')}
                </p>
                <p>
                    Check-out: {format(range.to, 'PPP')}
                </p>
            </>
            );
        }
    }

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