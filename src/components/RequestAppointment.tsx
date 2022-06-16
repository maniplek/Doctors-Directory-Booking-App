import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const RequestAppointment = () => {
  const doctors: readonly IDoctors[] = useSelector(
    (state: DoctorState) => state.doctors,
    
  );


  const {doctorId} = useParams()
  const [doctor, setDoctor] = useState<IDoctors>()

  useEffect(() => {
    const newDoctor =  doctors.find(item => item.id === doctorId)
    
    setDoctor(newDoctor)
    }, [])
console.log(doctor);
  return (
    <div>
        
        <img src={doctor?.profilePicture || ""}/>
        <p>Name: {doctor?.name}</p>
        <p>Bio:{doctor?.bio}</p>
        <p>Location: {doctor?.location}</p>
        
    </div>
  )
}

export default RequestAppointment