import React ,{Component} from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }
    onSearchChange  = (event)=>{
        //console.log(event.target.value);
        this.setState({searchfield : event.target.value});
        
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(user =>{
                this.setState({robots: user})
            })
    }
    render(){
        const filteredRobots= this.state.robots.filter((robots)=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if(this.state.robots.length===0){
            return <h1 className='tc f1'>Loading</h1>
        }
        else{
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <Cardlist robots={filteredRobots}/>
                </Scroll>
                
                
            </div>
            
        )
        }
    }
}

export default App;