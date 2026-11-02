import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component{
    constructor() {
        super();

        this.state = {
            newDate: '',
            birthday: '',
            showStats: false
        }
    }

    changeBirthday(event) {
        event.preventDefault();
        if (!this.state.newDate) return;
        this.setState({birthday: this.state.newDate, showStats: true })
    }

    render(){
        const today = new Date().toISOString().slice(0, 10);
        return(
            <div className="App">
                <h2>Input Your Birthday</h2>
                <Form className="birthday-form" onSubmit={event => this.changeBirthday(event)}>
                    <FormControl 
                        type="date"
                        max={today}
                        onChange= { event => this.setState({newDate: event.target.value })}
                    />
                    <Button type="submit" disabled={!this.state.newDate}>
                        Submit
                    </Button>
                </Form>
                {
                    this.state.showStats &&
                        <div className="fade-in age-stats" key={this.state.birthday}>
                            <AgeStats date={ this.state.birthday }/> 
                        </div>
                }
            </div>
        )
    }
}

export default App;
