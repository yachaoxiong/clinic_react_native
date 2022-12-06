import React,{ useEffect, useState } from 'react'
import { getPatientHistory } from '../services/patientServices'


export default function usePatientHistoryHooks(patientId) {
    
    const [patientHistory, setPatientHistory] = useState([])
  
    useEffect(() => {
      getPatientHistory(patientId).then((response) => {
        setPatientHistory(response)
      }).catch((error) => {
        console.log(error)
      }
      )
    }, [])
    
    return patientHistory
  }
