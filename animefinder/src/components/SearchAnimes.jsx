import React, { Component } from 'react';
import { Form, FormControl, FormLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAnimes } from '../actions';

class SearchAnimes extends Component{
    constructor(){
        super();

        this.state = {
            query: '',
            error: null
        }
    }

    search(event){
        event.preventDefault();
        const query = this.state.query.trim();
        if (!query) return;

        // Jikan v4 (unofficial MyAnimeList API). v3 was shut down in 2022.
        const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=16&sfw=true`;
        this.setState({ error: null });
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error(`Request failed (${response.status})`);
                return response.json();
            })
            .then(json => this.props.setAnimes(json.data))
            .catch(() => this.setState({ error: 'Could not reach the anime API. Try again in a moment.' }));
    }

    render(){
        return(
            <div>
                <Form className="search-form" onSubmit={event => this.search(event)}>
                    <FormLabel htmlFor="anime-query">Search Animes</FormLabel>
                    <FormControl 
                        id="anime-query"
                        type="text" 
                        placeholder="Naruto"
                        onChange={event=>this.setState({query:event.target.value})} 
                    />
                    <Button type="submit">Submit</Button>
                </Form>
                {this.state.error && <p className="text-danger">{this.state.error}</p>}
            </div>
        )
    }
}

export default connect(null,{ setAnimes })(SearchAnimes);
