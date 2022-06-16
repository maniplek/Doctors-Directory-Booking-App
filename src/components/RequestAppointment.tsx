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
         <h3>Details</h3>
        <img className='w-50 h-60' src={doctor?.profilePicture || ""} alt=''/>
        <h2>Name: {doctor?.name}</h2>
        <p>{doctor?.depertment}</p>
       <hr/>
      </div>
      <div>
        <h3>calendar</h3>
        <Calendar onChange={onChange} value={value} />
        <div>
          <h3>Available time</h3>
        </div>
        <div>
          <button className='bg-blue-300 text-white rounded m-9'>BOOK AN APPOINTMENT</button>
        </div>
      </div>
       
        
    </div>
  )
}

export default RequestAppointment