import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import { connect } from 'react-redux'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, index) => <li key={index}>{band.name}</li>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => {
  return { bands }
}

const mapDispatchToProps = (dispatch) => {
  return {addBand: band => dispatch({type: "ADD_BAND", band})}
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
