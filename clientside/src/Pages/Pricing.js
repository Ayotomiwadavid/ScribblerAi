import React, { useEffect } from 'react'
import Header from '../Components/Appbar'
import LatCTA from '../Components/LastCta'
import Footer from '../Components/Footer'
import Breadcrumbs from '../Components/Breadcrumbs'
import Prices from '../Components/Prices'
import Faq from '../Components/Faq'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already registered
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      // Redirect to login page if user is already registered
      navigate('/userAuth/login');
    }
  }, [navigate]);
  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <Header />
    <Breadcrumbs 
        currentPageName= 'pricing'
        previousPage='Home'
        currentPage='pricing'
        previousPageUrl='/'
    />
    <Prices />
    <Faq />
    <LatCTA />
    <Footer />
    </div>
  )
}

export default Pricing
