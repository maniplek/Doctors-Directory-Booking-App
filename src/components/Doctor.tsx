import * as React from "react";
import { Link } from "react-router-dom";


type Props = {
  doctor: IDoctors;
  removeDoctor: (doctor: IDoctors) => void;
};

export const Doctor: React.FC<Props> = ({ doctor }) => {
 
  return (
    <div className="flex px-40 mx-9">
      <div className="flex justify-center gap-9 rounded p-2 overflow-hidden bg-white shadow-lg m-1">
            <div>
              <Link to={`doctorProfile/${doctor.id}`}>
              <img src={doctor.profilePicture} alt=""  className="w-30 h-20 object-center rounded-2xl"/>
              </Link>
                
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
            <Link to={`requestAppointment/${doctor.id}`} className="bg-blue-400 text-white rounded-full px-2 m-9"> 
                              Request apointment 
           </Link>
          
      </div>
    </div>
  );
};
