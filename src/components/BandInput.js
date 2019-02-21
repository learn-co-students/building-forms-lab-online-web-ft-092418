import React, { Component } from 'react'


class BandInput extends Component {
  
  state = {
    name: ''
  }
  
  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  
  handleSubmit = event => {
      event.preventDefault();
      this.props.addBand(this.state)
      this.setState({
        name: ''
      })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/> <br/>
          {this.state.name} <br/>
          <input type="submit" />
       </form>
      </div>
    )
  }
}


export default BandInput