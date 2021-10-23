import React from 'react'

const projectCard = (props) => {
const {img, alt, name, progress, usersLogo} = props
  return (
    <div className='card rpgui-container framed float'>
            <header>{name}</header>
            <p>Progress is {progress}/10</p>
            <p>The team:</p>
            <p>{usersLogo}</p>
          </div>
  )
}

<div className="card rpgui-container framed float">

<header>Meetings Today</header>
<ul>
  <li>Google: 9AM</li>
  <li>Facebook: 11AM</li>
  <li>Youtube: 4PM</li>
</ul>
</div>

export default projectCard
