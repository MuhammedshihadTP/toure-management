import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl:weatherImg,
        title:'Calculate Weather',
        desc:'Lorem ispsum doler sit amet'
    },
    {
        imgUrl:guideImg,
        title:'Best Tour Guaide',
        desc:'Lorem ispsum doler sit amet'
    },
    {
      imgUrl:customizationImg,
      title:'Costomization',
      desc:'Lorem ispsum doler sit amet'
  }


]


function ServiceList() {
  return (
   <>
   {

    servicesData.map((item,index)=> <Col lg='3' key={index}><ServiceCard item={item}/></Col>)
   }
   </>
  )
}

export default ServiceList