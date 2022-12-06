import React,{ useEffect, useState } from 'react'
import { getAllTestsByPatientId } from '../services/patientServices'

export default function usePatientTestHooks(patientId) {
      
      const [patientTests, setPatientTests] = useState([])
  
      useEffect(() => {
        getAllTestsByPatientId(patientId).then((response) => {
          setPatientTests(response)
        }).catch((error) => {
          console.log(error)
        }
        )
      }, [])
      
      return patientTests
}
      