
import { useSelector } from "react-redux";
import {  removeDoctors } from "../store/actionCreators";
import { Doctor } from "./Doctor";
const Home = () => {
  const doctors: readonly IDoctors[] = useSelector(
    (state: DoctorState) => state.doctors,
    
  );
  return (
    <div>
        <div className='flex px-9'>
                <div>
                <main>
        <h1 className="flex justify-center underline font-bold p-2 ">OUR DOCTORS</h1>
        {doctors.map((doctor: IDoctors)=>(
          <Doctor
            key={doctor.id}
            doctor={doctor}
            removeDoctor={removeDoctors}
            />)
        )}
      </main>
                </div>
        </div>
    </div>
  )
}

export default Home