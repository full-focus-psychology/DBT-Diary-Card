import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import DailyCheckBoxes from './DailyCheckBoxes'

const AlanTestComponent = () => (
  <MuiThemeProvider>
    <DailyCheckBoxes />
  </MuiThemeProvider>
)

export default AlanTestComponent


// We can remove this later. I am using it to hold my components as I write them
