import React from 'react'
import Checkbox from 'material-ui/Checkbox'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const renderDays = () => (
  days.map((day) => {
    <div className = 'dailyCheckBoxes'>
      <div className='dailyCheckBox'>
        <p>{day}</p>
      </div>
      <div className='dailyCheckBox'>
        <Checkbox />
      </div>
      <div className='dailyCheckBox'>
        <Checkbox />
      </div>
    </div>
  })
)

const renderHeader = () => (
  <div className='dailyCheckBoxes'>
    <div className='dailyCheckBox'>
      <p>Day</p>
    </div>
    <div className='dailyCheckBox'>
      <p>Diary Card</p>
    </div>
    <div className='dailyCheckBox'>
      <p>Col</p>
    </div>
  </div>
)

const DailyCheckBoxes = (props) => (
  <div>
    {renderHeader()}
    {renderDays()}
  </div>
)

export default DailyCheckBoxes
