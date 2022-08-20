import React from 'react'

export default function Testimonial(props) {
  return (
    <div className='testimonial'>
      <div className='testimonial--head'>
        <div className='right-side'>
          <img src={props.img}/>
          <h4>
            {props.name}
            <span> {props.location}</span>
          </h4>
        </div>
        <div className='left-side'>
           <p>{props.rating}</p>
            <img src="./star.svg" className='star'/>
        </div>
      </div>
      <div>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
