import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header'
import GenInfo from './components/GenInfo'
import items from './components/items'
import WhatWeDo from './components/WhatWeDo'
import PlanHeader from './components/PlanHeader'
import Plans from './components/Plans'
import LocationHeader from './components/locationHeader'
import LocationBody from './components/LocationBody'
import TestimonialHeader from './components/TestimonialHeader'
import Testimonial from './components/Testimonial'
import tdata from './components/tdata'
import Subscription from './components/Subscription'
import Footer from './components/Footer'

function App() {

  const info = items.map(item => {
    return <GenInfo
      key={item.id}
      img={item.mainImg}
      name={item.name}
      number={item.number}
    />
  }) 

  const testimonial = tdata.map(data=>{
    return <Testimonial 
      img={data.tImg}
      name={data.name}
      location={data.location}
      rating={data.rating}
    />
  })

  return (
    <div className="App">
      <div className='top-half'>
        <Navbar />
        <Header />
        <div className='info'>
          {info}
        </div>
        <WhatWeDo />
        <PlanHeader />
        <Plans />
      </div>
     
      <div className='bottom-half'>
        <LocationHeader />
        <LocationBody />
        <TestimonialHeader />
        <div className='testimonial-main'>
          {testimonial}
        </div>
        <Subscription />
        <Footer />
      </div>
    </div>
    
  )
}

export default App
