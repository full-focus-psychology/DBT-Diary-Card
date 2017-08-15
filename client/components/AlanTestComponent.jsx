import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import DailyCheckBoxes from './DailyCheckBoxes'
import Urges from './Urges'
import Emotions from './Emotions'

const AlanTestComponent = () => (
  <div>
    <MuiThemeProvider>
      <DailyCheckBoxes />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <Urges />
    </MuiThemeProvider>
    <MuiThemeProvider>
      <Emotions />
    </MuiThemeProvider>
  </div>
)

export default AlanTestComponent


// We can remove this later. I am using it to hold my components as I write them
