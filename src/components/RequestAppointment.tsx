import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Calendar from 'react-calendar';


const RequestAppointment = () => {
  const doctors: readonly IDoctors[] = useSelector(
    (state: DoctorState) => state.doctors,
    
  );

  const [value, onChange] = useState(new Date());

  const {doctorId} = useParams()
  const [doctor, setDoctor] = useState<IDoctors>()

  useEffect(() => {
    const newDoctor =  doctors.find(item => item.id === doctorId)
    
    setDoctor(newDoctor)
    }, [doctorId, doctors])
console.log(doctor);


  return (
    <div className='flex justify-around p-5'>
      <div>
         <h3 className='uppercase font-extrabold mx-9 my-1'>Booking apointment</h3>
        <img className='w-50 h-60 rounded-3xl' src={doctor?.profilePicture || ""} alt=''/>
        <h2 className='font-semibold'>Name: {doctor?.name}</h2>
        <p className='font-semibold'>Depertment: {doctor?.depertment}</p>
       <hr/>
      </div>
      <div className='my-9'>
       
        <Calendar className='border  border-red-300 border-spacing-8' onChange={onChange} value={value} />
        <div className='p-4'>
          <h3 className='font-semibold'>Available time</h3>
        </div>
        <div>
          <button className='border border-solid border-blue-900 text-blue-600 rounded-full capitalize md:uppercase bg-blue-100 p-1 my-2 '>BOOK AN APPOINTMENT</button>
        </div>
      </div>
       
        
    </div>
  )
}

export default RequestAppointment