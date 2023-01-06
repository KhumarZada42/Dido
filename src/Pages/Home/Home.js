import React from 'react'
import Cleanblog from '../../Components/HomeComponents/Cleanblog/Cleanblog'
import SecondTextSection from '../../Components/HomeComponents/SecondTextSection/SecondTextSection'
import Footer from '../../Layout/Footer/Footer'
import Navbar from '../../Layout/Navbar/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <Cleanblog/>
    <SecondTextSection/>
    <Footer/>
    </>
  )
}

export default Home