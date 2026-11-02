import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

import { Form, FormControl, FormLabel } from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

class App extends Component{
    constructor(){
        super();
        this.state = {
            memeLimit: 10,
            text0: '',
            text1: ''
        }
    }
    render(){
        return(
            <div>
                <h2><u>Welcome To Meme Generator!</u></h2>
                <MyMemes />
                {this.props.error && <p className="text-danger">{this.props.error}</p>}
                <h4><i>Write Some Text, then click a picture</i></h4>
                <Form className="meme-form" onSubmit={event => event.preventDefault()}>
                    <FormLabel htmlFor="text0">Top</FormLabel>
                    <FormControl 
                        id="text0"
                        type="text"
                        onChange={event => this.setState({text0: event.target.value})}
                    />
                    <FormLabel htmlFor="text1">Bottom</FormLabel>
                    <FormControl 
                        id="text1"
                        type="text"
                        onChange={event => this.setState({text1: event.target.value})}
                    />
                </Form>
                {
                    this.props.memes.slice(0, this.state.memeLimit ).map(meme => {
                        return (
                            <MemeItem 
                            key={meme.id} 
                            meme={meme}
                            text0 = {this.state.text0}
                            text1 = {this.state.text1}
                             /> 
                        )
                    })
                }
                {this.state.memeLimit < this.props.memes.length &&
                <div className="meme-button" onClick={()=>{
                    this.setState({memeLimit: this.state.memeLimit + 10})
                }}>Load 10 more memes...</div>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(App);