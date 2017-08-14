import React from 'react'
import Checkbox from 'material-ui/Checkbox'

const DailyCheckBoxes = (props) => (
  <span>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>
        <p>Day</p>
      </div>
      <div>
        <p>Diary Card</p>
      </div>
      <div>
        <p>Skills</p>
      </div>
    </div>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div>
        <p>Monday</p>
      </div>
      <div>
        <Checkbox
        />
      </div>
      <div>
        <Checkbox
        />
      </div>
    </div>
  </span>
)

export default DailyCheckBoxes
