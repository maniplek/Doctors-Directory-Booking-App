import * as React from "react";
import { Link } from "react-router-dom";


type Props = {
  doctor: IDoctors;
  removeDoctor: (doctor: IDoctors) => void;
};

export const Doctor: React.FC<Props> = ({ doctor, removeDoctor }) => {
 

//   const saveApointment = React.useCallback(
//     (doctor: IDoctors) => dispatch(addDoctor(doctor)),
//     [dispatch]
//   );

  return (
    <div className="flex items-center justify-between px-10 mx-9 ">
      <div className="container flex justify-center gap-9 rounded p-2 overflow-hidden bg-white shadow-lg m-1">
            <div>
                <img src={doctor.profilePicture} alt=""  className="w-20 h-20 rounded-full"/>
            </div>
            <div>
                <h1 className="text-xl font-semibold">
                    {doctor.name}, {doctor.doctorTitle}
                </h1>
                <p className="font-thin">{doctor.depertment}</p>
                <p className="font-thin">{doctor.location}</p>
                <hr />
                    <div className="flex flex-row">
                        <p className="font-thin">Phone:{doctor.phoneNumber}</p>
                    </div>
            </div>
            <Link to={`requestAppointment/${doctor.id}`} className="bg-orange-400 text-white rounded m-9"> 
                              Request apointment 
           </Link>
          
      </div>
    </div>
  );
};
