import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state={
        options:[],
        selectedOption:undefined
    };

    handleDeleteOptions=() =>{
        this.setState(() => ({options:[]}))
    };

    handleDeleteOption=(optionToRemove) =>{
        
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>{
                return optionToRemove !== option
            })
        }))
    };

    handlePick=()=>{
        
        const random_num= Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[random_num];
        this.setState(()=> ({
            selectedOption: option
        })

        )
   
    };

    handleAddOption=(option) =>{
        if(!option){
            return 'Enter a valid option'
        }
        else if(this.state.options.indexOf(option)!== -1){
            return 'Option already exists'
        }
        this.setState((prevState)=>({options:prevState.options.concat([option])}));
   
    };

    handleModal = () => {
        this.setState(() => ({selectedOption:undefined}));
    }

    componentDidMount(){
        try{
            console.log('fetching data');
            const json = localStorage.getItem('options');
            const options= JSON.parse(json);
            if(options){
                this.setState(()=>({options}));
        }
        }
        catch(e){
            //do nothing 
        }
        
        
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length!==this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    
    componentWillUnmount(){
        console.log('component will unmount');
    }

    //with react component we must define render
    render(){
        //props are like attr in html. They are used to maintain reusability of components
        const title="Indecision";
        const subtitle="Put your life in our hands";
        
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className='container'>
                    <Action 
                    hasOption={this.state.options.length> 0} 
                    subtitle={subtitle} 
                    handlePick={this.handlePick}
                    />
                    <div className='widget'>
                    <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                    />
                    <AddOption handleAddOption={this.handleAddOption}  />
                    </div>
                </div>
                <OptionModal handleModal={this.handleModal} selectedOption={this.state.selectedOption}/>
            </div>
        );
    }
}

