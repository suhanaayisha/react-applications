import React from 'react';
import partyPopper from '../assets/party-popper.jpg';

function timeSince(date){
    const birth = new Date(`${date}T00:00:00`);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        // borrow the number of days in the previous month
        months -= 1;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return `${years} years, ${months} months and ${days} days old`
}

function AgeStats({ date }) {
    return(
        <div>
            <h3> {date}</h3>
            <h4>Congrats on being {timeSince(date)}!</h4>
            <img src={partyPopper} alt="party popper" className="party-popper"/>
        </div>
    )
}

export default AgeStats;
