import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import DailyCheckBoxes from './DailyCheckBoxes'
import Urges from './Urges'

const AlanTestComponent = () => (
  <div>
    <MuiThemeProvider>
      <DailyCheckBoxes />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <Urges />
    </MuiThemeProvider>
  </div>
)

export default AlanTestComponent


// We can remove this later. I am using it to hold my components as I write them
