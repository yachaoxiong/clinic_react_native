import React,{ useEffect, useState } from 'react'
import { getAllPatients } from '../services/patientServices'

export default function usePatientHooks() {
  
  const [patients, setPatients] = useState([])

  useEffect(() => {
    getAllPatients().then((response) => {
      setPatients(response)
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [])
  
  return patients
}
