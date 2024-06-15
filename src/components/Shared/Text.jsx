import React, { useState } from 'react'
import Button from './Button'

export const onboardingRolesData = [
  { id: 1, name: 'Player', img: '/player.jpeg' },
  { id: 2, name: 'Coach', img: '/player.jpeg' },
  { id: 3, name: 'Trainer', img: '/player.jpeg' },
  { id: 4, name: 'Scout', img: '/player.jpeg' },
  { id: 5, name: 'Agent', img: '/player.jpeg' },
  { id: 6, name: 'Fan', img: '/player.jpeg' },
]

const Text = () => {
  const [selected, setSelected] = useState(null)

  const [onboardingRoles, setIsOnboarding] = useState(onboardingRolesData)

  const handleDelete = (id) => {
    
     setIsOnboarding(onboardingRoles.filter((item) => item.id !== id))
    
  }
  return (
    <>
      <div className="grid-container">
        {onboardingRoles.map((role) => (
          <div
            key={role.id}
            className={`${
              selected === role.id ? 'border-blue-700' : 'border-transparent'
            } flex-container flex-item`}
            onClick={() =>handleDelete(role.id)}
          >
            <div className="flex-item">
              <img src={role.img} alt="" className="content-image" />
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <Button>Next</Button>
      </div>
    </>
  )
}

export default Text
