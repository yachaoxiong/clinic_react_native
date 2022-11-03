import React, { createContext, useCallback, useEffect, useState } from 'react'
import { getCurrentUser } from '../utils/functions'

export const StoreContext = createContext()


const StoreContextProvider = ({ children }) => {
  
  const [myUser, setMyUser] = useState(null)
   
  const updateUser = (user) => {
    setMyUser(user)
  }

  useEffect(() => {
    const initUser = async () => {
      const user = await getCurrentUser()
      updateUser(user)
    }
    initUser()
  }, [updateUser])


  return (
    <StoreContext.Provider
      value={{
        myUser: myUser,
        updateUser: updateUser,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
export default StoreContextProvider