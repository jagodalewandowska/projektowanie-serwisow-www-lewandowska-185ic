import React, { Component } from 'react'

import ReactScoreIndicator from 'react-score-indicator'

class Chart extends Component {
  render () {
    return (
      <ReactScoreIndicator
        /* Wartość */
        value={45}
        /* Max wartość */
        maxValue={100}
        /* Szerokość */
        width={200}
        /* Grubość linii */
        lineWidth={20}
        /* Odległość pomiędzy */
        lineGap={10}
        /* Przezroczystość elementów ponad wartość */
        fadedOpacity={20}    
      />
    )
  }
}

export default Chart;