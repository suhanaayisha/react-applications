import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg';

class AgeStats extends Component{
    timeSince(date){
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

    render() {
        return(
            <div>
                <h3> {this.props.date}</h3>
                <h4>Congrats on being {this.timeSince(this.props.date)}!</h4>
                <img src= {partyPopper} alt= "party popper" className="party-popper"/>
            </div>
        )
    }
}

export default AgeStats;
