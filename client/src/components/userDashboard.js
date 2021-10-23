import React from 'react'

const projectCard = (props) => {
const {img, alt, name, progress, usersLogo} = props
  return (
    <div className='project-card float'>
          <img src={img} alt = {alt}></img>
          <div className='description'>
            <header>{name}</header>
            <p>Progress is {progress}/10</p>
            <p>The team:</p>
            <p>{usersLogo}</p>
          </div>
        </div>
  )
}

export default projectCard
