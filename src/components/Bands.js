import React from "react"

const Bands = props => {
  {console.log("bands", props)}
  return (
    <ul>
      Bands:
      {props.bands.map(band => <li> {band.name} </li>)}
    </ul>
  )
}

export default Bands
