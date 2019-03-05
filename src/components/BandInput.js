// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';


//need handleSubmit()
//need onChange()
//need dispatch functions



class BandInput extends Component {
    state = {
      name: ""
    }
  

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    //add dispatch
    this.props.dispatch({ type: "ADD_BAND", payload: this.state})
    this.setState({
      name: ""
    })
  }


  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}


export default connect()(BandInput)
