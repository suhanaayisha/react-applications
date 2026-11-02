import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

function App() {
    const [newDate, setNewDate] = useState('');
    const [birthday, setBirthday] = useState('');

    function changeBirthday(event) {
        event.preventDefault();
        if (!newDate) return;
        setBirthday(newDate);
    }

    const today = new Date().toISOString().slice(0, 10);
    return(
        <div className="App">
            <h2>Input Your Birthday</h2>
            <Form className="birthday-form" onSubmit={changeBirthday}>
                <FormControl
                    type="date"
                    max={today}
                    onChange={event => setNewDate(event.target.value)}
                />
                <Button type="submit" disabled={!newDate}>
                    Submit
                </Button>
            </Form>
            {
                birthday &&
                    <div className="fade-in age-stats" key={birthday}>
                        <AgeStats date={birthday}/>
                    </div>
            }
        </div>
    )
}

export default App;
