import React, { createContext, useCallback, useEffect, useState } from 'react'
import { getUser } from '../auth/auth';
import { getToken } from '../utils/functions';
export const StoreContext = createContext()


const StoreContextProvider = ({ children }) => {
  
  const [myUser, setMyUser] = useState(null)
   
  const updateUser = (user) => {
    setMyUser(user)
  }

  useEffect(() => {
    const initUser = async () => {
      try {
        const token = await getToken();
        if (token) {
          const user = await getUser()
          updateUser(user)
        } else {
          updateUser(null)
        }  
      }
      catch (error) {
        console.log(error)
      }
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