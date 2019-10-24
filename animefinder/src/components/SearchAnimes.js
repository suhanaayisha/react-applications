import React, { Component } from 'react';
import { Form, FormControl, FormGroup,  FormLabel, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';

class SearchAnimes extends Component{
    constructor(){
        super();

        this.state = {
            ingredients: '',
        }
    }

    search(){
        console.log("hi")
        let { ingredients, dish } = this.state
        const url =`https://api.jikan.moe/v3/search/anime?q=${ingredients}&limit=16`;
        console.log("url",url);
        fetch(url, {
            method: 'GET'
        }).then(response => response.json())
          .then(json => {
              this.props.setRecipes(json.results)
          });
    }

    render(){
        return(
            <div> Search Animes
                <Form inline>
                    <FormGroup>
                        <FormLabel>Animal </FormLabel>
                        {' '}
                        <FormControl 
                        type="text" 
                        placeholder="Naruto"
                        onChange={event=>this.setState({ingredients:event.target.value})} 
                        />
                    </FormGroup>
                    {' '}
                    <Button onClick={() => this.search()}>Submit</Button>
                </Form>
            </div>
        )
    }
    }

export default connect(null,{ setRecipes })(SearchAnimes);