import React, { Component } from 'react'

export default class Yasmin extends Component {
    state = {
      search:""
    };


    change=(e)=>{
      this.setState({
        search: e.target.value
      })



    }
  
    render() {
      console.log(this.state.search)
      return(
     <>
     <form style={{ float:"right" }}>
     <input type="text" value={this.state.search} placeholder="Search about contry" onChange={this.change} />
     <button className="btn"  ><i className="fa fa-search"></i></button>
     </form>

      </>
      ); 
    }
  }
