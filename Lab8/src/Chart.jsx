import React, { Component } from 'react'

import ReactScoreIndicator from 'react-score-indicator'

class Chart extends Component {
  render () {
    return (
      <ReactStoreIndicator
        value={30}
        maxValue={100}
      />
    )
  }
}

export default Chart;