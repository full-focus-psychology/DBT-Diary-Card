import React from 'react'
import Checkbox from 'material-ui/Checkbox'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function renderDays(days)  {
  return days.map((day) => {
    return (
      <div className = 'dailyCheckBoxes'>
        <div className='dailyCheckBox'>
          <p>{day}</p>
        </div>
        <div className='dailyCheckBox tickBox'>
          <Checkbox />
        </div>
        <div className='dailyCheckBox tickBox'>
          <Checkbox />
        </div>
      </div>
    )
  })
}

const renderHeader = () => (
  <div className='dailyCheckBoxes'>
    <div className='dailyCheckBox'>
      <p>Day</p>
    </div>
    <div className='dailyCheckBox'>
      <p>Diary Card</p>
    </div>
    <div className='dailyCheckBox'>
      <p>Skills</p>
    </div>
  </div>
)

const DailyCheckBoxes = (props) => (
  <div>
    {renderHeader()}
    {renderDays(days)}
  </div>
)

export default DailyCheckBoxes
