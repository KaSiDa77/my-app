import React from 'react';
import ReactDOM from 'react-dom';

class Cricketer extends React.Component{
  constructor(props){
    super(props)
    this.player={name:"Rohit Kohli", age:34}
  }
  render(){
    return <h1>The name of the player is {this.player.name} and he is {this.player.age} years old and has scored {this.props.buns.runs} in his life</h1>
  }
}

class Runs extends React.Component{
  render(){
    const obj={runs:23233,name:"Sandulkar"}
    return (<div>
    <p>The 2nd most popular Sport:</p>
    <Cricketer buns={obj}/>
    </div>)
  }
}
ReactDOM.render(<Runs/>, document.getElementById("root"))