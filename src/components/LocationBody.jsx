import React from 'react'
import world from "../assets/world.png"
import sponsors from '../assets/Sponsored.png'

export default function LocationBody() {
  return (
    <div className='locationImages'>
      <img src={world} className="world" />
      <img src={sponsors} className="sponsor" />
    </div>
  )
}
