import React, { useContext } from 'react'
import UserContext from './Components/Controller'

const CustomHook = () => {
    const {currentUserDetails, setCurrentUserDetails, conversationsContext, setConversationContext, setLoading, fetchUserData, loading} = useContext(UserContext);
  return (
      { currentUserDetails, conversationsContext, loading, fetchUserData }
  )
}

export default CustomHook
