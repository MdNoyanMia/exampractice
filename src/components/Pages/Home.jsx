import React from 'react'
import Banner from '../Layouts/Banner'
import Appi from '../Layouts/Appi'
import Countdown from '../Layouts/Countdown'
import Container from '../Container'





const Home = () => {

    const targetDate = '2025-12-31T23:59:59';
  return (
  <>
  <Banner/>
{/* <Appi/> */}

 <Container>
    <h1>Birthday Countdown</h1>
      <Countdown targetDate={targetDate} classname='text-[20px]'/>
 </Container>

  </>
  )
}

export default Home