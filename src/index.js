import React from 'react';
import ReactDOM from 'react-dom';

class Abcd extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Name:"Kohli",
      Age:34,
      Level:"Expert"
    }
  }
  change=()=>{
    this.setState({Level:"GOAT"});
  }
  render(){
    return(
      <div>
        <button onClick={this.change} type="button">Click to reveal true Level</button>
        <p>{this.state.Name} is a very good player.</p>
        <p>He is {this.state.Age} years old.</p>
        <p>He is an {this.state.Level} batsman.</p>
      </div>
    )
      
  }
}
ReactDOM.render(<Abcd/>, document.getElementById("root"));