import React,{ useEffect, useState } from 'react'
import { getAllPatients } from '../services/patientServices'
import { StoreContext } from '../store/store'

export default function usePatientHooks() {
  const { isRefreshing } = React.useContext(StoreContext)
  const [patients, setPatients] = useState([])

  useEffect(() => {
    getAllPatients().then((response) => {
      setPatients(response)
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [isRefreshing])
  
  return patients
}



