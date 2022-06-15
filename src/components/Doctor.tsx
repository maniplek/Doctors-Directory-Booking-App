import * as React from "react";


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
                <h3>{doctor.profilePicture} </h3>
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
           <button
          className="bg-orange-400 text-white rounded m-9"
          onClick={()=> console.log("added appointment")}
          >
          Request apointment
           </button>
      </div>
    </div>
  );
};
