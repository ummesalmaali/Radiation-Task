import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Events() {
    return (
        <div className="w-8/12">
            <Calendar className="w-full" />
        </div>
    );
}

export default Events;
