//to make a class into component use extends React.Component, has to have uppercase first letter
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOption=this.handleDeleteOption.bind(this)
        this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
        this.handlePick=this.handlePick.bind(this)
        this.handleAddOption=this.handleAddOption.bind(this)
        this.state={
            options:[]
        }
    }

    componentDidMount(){
        try{
            console.log('fetching data');
            const json = localStorage.getItem('options');
            const options= JSON.parse(json);

            if(option){
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

    handleDeleteOptions() {
        this.setState(() => ({options:[]}))
    }

    handleDeleteOption(optionToRemove) {
        
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>{
                return optionToRemove !== option
            })
        }))
    }
    

    handlePick() {
        
            const random_num= Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[random_num];
            alert(option);
       
    }

    handleAddOption(option) {
        if(!option){
            return 'Enter a valid option'
        }
        else if(!this.state.options.indexOf(option)){
            return 'Option already exits'
        }
        this.setState((prevState)=>({options:prevState.options.concat([option])}));
   
    }

    //with react component we must define render
    render(){
        //props are like attr in html. They are used to maintain reusability of components
        const title="Indecision Application";
        const subtitle="Put your life in our hands";
        
        return (
            <div>
                <Header title={title} />
                <Action 
                hasOption={this.state.options.length> 0} 
                subtitle={subtitle} 
                handlePick={this.handlePick}
                />
                <Options 
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption}  />
            </div>
        );
    }
}


const Header= (props) => {
    return (
                <div>
                    <h1>{props.title}</h1>
                    <h2>{props.subtitle}</h2>
                </div>
            );
}

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOption}
            >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        //when we create an array in jsx, we have to pass a key,key is a keyword
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length===0 && <p>Please add options to get started!</p>}
            {
               props.options.map((option)=>(
                   <Option 
                   key={option} 
                   optionText={option}
                   handleDeleteOption={props.handleDeleteOption}
                   />
                   ))
               }   
            <Option />
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();
        const option= e.target.elements.option.value.trim(); //here option is the name we gave to the input
        const error= this.props.handleAddOption(option);
        this.setState(()=>({error}));
        if(!error){
            e.target.elements.option.value=""
        }
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            {props.optionText && 
            <button onClick={(e)=> {
                props.handleDeleteOption(props.optionText);
            }
                }>
                remove
            </button>
        }
        </div>
    );
}


const jsx = (
    <div>
    <Header />
    <Action />
    <Option />
    <AddOption />
    </div>
); //common convention to put space '<Action />' between and /

//we have to use it to render any element
ReactDOM.render(<IndecisionApp /> ,document.getElementById('app'));