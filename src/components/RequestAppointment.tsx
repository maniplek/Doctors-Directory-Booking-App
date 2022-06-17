import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Calendar from 'react-calendar';
// import { Timeit } from 'react-timeit';

const RequestAppointment = () => {
  const doctors: readonly IDoctors[] = useSelector(
    (state: DoctorState) => state.doctors,
    
  );

  const {doctorId} = useParams()
  const [doctor, setDoctor] = useState<IDoctors>()
  // const [time, setTime] = useState();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const newDoctor =  doctors.find(item => item.id === doctorId)
    
    setDoctor(newDoctor)
    }, [doctorId, doctors])

    const onChange = (date: React.SetStateAction<Date>) =>{
      setDate(date);
    }

    const dateNow = () =>{
      console.log(date)
    }
  return (
    <div className='flex justify-around p-5'>
      <div>
         <h3 className='uppercase font-extrabold mx-9 my-1'>Booking apointment</h3>
        <img className='w-50 h-60 rounded-3xl' src={doctor?.profilePicture || ""} alt=''/>
        <h2 className='font-semibold'>Name: {doctor?.name}</h2>
        <p className='font-semibold'>Depertment: {doctor?.depertment}</p>
      </div>
      <div className='my-9 '>
       
        <Calendar className=' border border-blue-300 p-2 hover:blue-600  border-spacing-8 shadow-lg shadow-blue-200' 
        onChange={onChange} value={date} 
        
        />
   <button onClick={dateNow}>date</button>
        <div className='p-4 '>
          <h3 className='font-semibold'>Available time</h3>
          {/* <Timeit onChange={(value: React.SetStateAction<undefined>) => setTime(value)} /> */}
        </div>
        <div>
          <button className='border border-solid border-blue-900 text-blue-600 rounded-full capitalize md:uppercase bg-blue-100 p-1 my-2 '>BOOK AN APPOINTMENT</button>
        </div>
      </div>
    </div>
  )
}

export default RequestAppointment