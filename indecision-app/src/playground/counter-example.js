class Counter extends React.Component{
    constructor(props){
        super(props);
        this.addOne=this.addOne.bind(this)
        this.minusOne=this.minusOne.bind(this)
        this.reset=this.reset.bind(this)
        this.state={
            count: 0 //step 1:setting up a default state object
        };
    }
    componentDidMount(){
        try{
            console.log('fetching data');
            const cnt = localStorage.getItem('count');//get the item from local storage
            const count= parseInt(cnt); //parse it as an int since its a string

            if(!isNaN(count)){
                this.setState(()=>({count})); //set the state to count when the component is mounted
        }
        }
        catch(e){
            //do nothing 
        }
    }
        
        
    componentDidUpdate(prevProps, prevState){
        if(prevState.count!==this.state.count){
            
            localStorage.setItem('count',this.state.count);//set the item
        }
    }

    addOne(){
        //setState allows us to manipulate state objects
        //step 3: change the state based on an event
        //step 4: rerender after the state is changed
        //step 5: repeat 3 and 4
        this.setState((prevState) =>{
            return{
                count: prevState.count+1  
            };
        });
    }
    minusOne(){
        this.setState((prevState) => {
            return{
                count:prevState.count-1
            };
        });
    }
    reset(){
        this.setState(() => {
            return{
                count:0
            };
        });
    }

    render(){
        return(//step 2: render the default state object
            <div>
                <h1>Count: {this.state.count}</h1> 
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count=0

// const addOne = () => {
//     count++;
//     renderCounterApp();   
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     count=0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
// const templateTwo= (
//     <div>
//     <h1>Count:{count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//     </div>
// );


// ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
