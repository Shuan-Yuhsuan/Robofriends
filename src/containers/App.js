import React, {Component} from 'react'; // {Componet}: so that we just need to say 'component' instead of 'React.components' when using it
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

// to enable the interactive searchbar, we need to use "STATE". To do so, we need to declare the App this way
class App extends Component{
    constructor(){
        super()     // required syntax to use the "this" function below
        this.state = {
            robots: [],
            searchfield: ''     // searchbar input
        }
        console.log('1. constructor()');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')   // go to an external API (jsonplaceholder is a Free fake API for testing and prototyping.)        )
            .then(Response => Response.json())  // get a response from that API, and process it with .json()
            .then(users => this.setState({ robots: users}));    // receive users, and update the users with setState
        
            console.log('2. componentsDidMount()');
    }

    // a function that change this.state.searchfield according to input. --> assign this function into <SearchBox/> as a property/input -> assign it again to the ONCHANGE attribute
    onSearchChange = (event) => {   // this is not a default function of React, so it needs an "arrow funciton"
        this.setState({searchfield: event.target.value})
    }

    render () {
        const {robots, searchfield} = this.state;   // so that we don't need to say 'this.state.robots' every time
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())     //"toLowerCase": so that we don't need to worry about the capitalizaiton of user inputs
        })
     
        console.log('3. render()');

        if (robots.length === 0) {      // if it takes too long to load, then display "Loading"
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'> {/* 'tc' is a tachyons classname, stands for 'text-center' */}
                    <h1 className='f1'>RoboFriends</h1>  {/* 'f1': style from tachyons package */}
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>    {/* so that the searchBox keeps on top of the screen -> create a scroll component with another js file */}
                       <ErrorBoundary>  {/* when something went wrong when loading CardList, then execute the ErrorBoundary component */}
                        <CardList robots={filteredRobots}/>   {/*CardList is accepting a property "robots"*/}
                       </ErrorBoundary>
                    </Scroll>
                 </div>
            );
        }
        
    }
}


// // Original way of declarinng the App function/class
// const App = () => {
//     return (
//         <div className='tc'> {/* 'tc' is a tachyons classname, stands for 'text-center' */}
//             <h1>RoboFriends</h1>
//             <SearchBox />
//             <CardList robots={robots}/>   // CardList is accepting a property "robots"
//          </div>
//     );
// }

export default App;