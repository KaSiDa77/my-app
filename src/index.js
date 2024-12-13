import React from 'react';
import ReactDOM from 'react-dom';

/*class Inline extends React.Component{
  render(){
    const style1={
      fontFamily:"Arial",
      backgroundColor:"Green",
      color:"Blue"
    }
    const style2={
      fontFamily:"Times New Roman",
      backgroundColor:"Grey",
      color:"Yellow"
    }
  return(
    <div>
      <h1 style={style1}>HEllO.</h1>
      <h2 style={style2}>WHAT are You doinG?</h2>
    </div>
  )
  }
}

ReactDOM.render(<Inline/>, document.getElementById("root"))*/
import './index.css'


class Style extends React.Component{
render(){
  return(
    <div>
      <h1 className='one'>Number One</h1>
      <h2 className='two'>Style Two</h2>
    </div>
  )
}
}
ReactDOM.render(<Style/>, document.getElementById("root"))