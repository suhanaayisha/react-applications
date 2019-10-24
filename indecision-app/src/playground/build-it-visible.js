class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility=this.toggleVisibility.bind(this)
        this.state={
            title:"Visibility Toggle",
            visibility:false
        }
    }

    toggleVisibility(){

        this.setState((prevState)=>{
            return{
                visibility:!prevState.visibility
            };
            
        });
            
    };

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility?"Hide Details":"Show Details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Here are the details</p> 
                    </div>
                )}
           

            </div>
            

        );
    }
};

ReactDOM.render(<Visibility />, document.getElementById('app'));

// let visibility= false;
// const toggleVisibility = () => {
//     visibility= !visibility;
//     renderApp();
// };
// const appRoot = document.getElementById('app');
// const app={
//     title:"Visibility Toggle",
//     subtitle:"Put your life in the hands of a computer",
//     options:[]
// };

// const renderApp = () => {
//     const template = (
        <div>
            <h1>{app.title}</h1>
           
           <button onClick={toggleVisibility}>
            {visibility?"Hide Details":"Show Details"}
           </button>
           {visibility && (
               <div>
               <p>Here are the details</p> 
               </div>
           )}
           

        </div>
//     );
    
//     ReactDOM.render(template, appRoot);
//     }
    
//     renderApp();

componentDidMount(){
    console.log('fetching data');
    const json = localStorage.getItem('options');
    const options= JSON.parse(json);

    this.setState(()=>({options}));
}

componentDidUpdate(prevProps, prevState){
    if(prevState.options.length!==this.state.options.length){
        const json = JSON.stringify(this.state.options)
        localStorage.setItem('options',json);
    }
}