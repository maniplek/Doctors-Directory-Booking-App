import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

const DoctorProfile = () => {
    const doctors: readonly IDoctors[] = useSelector(
        (state: DoctorState) => state.doctors,
        
      );
    
    const {doctorId} = useParams()
  const [doctor, setDoctor] = useState<IDoctors>()

  useEffect(() => {
    const newDoctor =  doctors.find(item => item.id === doctorId)
    
    setDoctor(newDoctor)
    }, [doctorId, doctors])


  return (
    <div className='flex my-2'>
       <div className='my-5'>
         <h3 className='uppercase font-extrabold mx-9 my-1'>Doctor Profile</h3>
        <img className='w-50 h-60 rounded-3xl' src={doctor?.profilePicture || ""} alt=''/>
        <h2 className='font-semibold'>Name: {doctor?.name}</h2>
        <p className='font-semibold'>Title: {doctor?.doctorTitle}</p>
        <p className='font-semibold'>Department: {doctor?.depertment}</p>
        <p className='font-semibold'>LOCATION: {doctor?.location}</p>
        <p className='font-semibold'>Biography: {doctor?.bio}</p>
        
        <Link to="/requestAppointment" className=""> 
        <button className='border border-solid border-blue-900 text-blue-600 rounded-full capitalize md:uppercase bg-blue-100 p-1 my-2 '>book an appointment</button>
         </Link>
       <hr/>
      </div>
    </div>
  )
}

export default DoctorProfile