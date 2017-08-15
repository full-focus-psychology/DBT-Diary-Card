import React from 'react'
import Checkbox from 'material-ui/Checkbox'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function renderDays(days)  {
  return days.map((day) => {
    return (
      <div className = 'row'>
        <div className='col'>
          <p>{day}</p>
        </div>
        <div className='col tickBox'>
          <Checkbox />
        </div>
        <div className='col tickBox'>
          <Checkbox />
        </div>
      </div>
    )
  })
}

const renderHeader = () => (
  <div className='row'>
    <div className='col'>
      <p>Day</p>
    </div>
    <div className='col'>
      <p>Diary Card</p>
    </div>
    <div className='col'>
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
