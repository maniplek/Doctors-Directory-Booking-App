import React, { useState } from "react";
import { addDoctor } from "../store/actionCreators";
import { AddDoctor } from "./AddDoctor";
import Calendar from "react-calendar";

const Admin = () => {
  const saveDoctor = React.useCallback(
    (doctor: IDoctors) => dispatch(addDoctor(doctor)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const [date, setDate] = useState(new Date());

  const deleteDoctor = React.useCallback(
    (doctor: IDoctors) => dispatch(removeDoctor(doctor)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, removeDoctor]
  );
  const onChange = (date: React.SetStateAction<Date>) => {
    setDate(date);
  };

  const dateNow = () => {
    console.log(date);
  };

  return (
    <div className="flex flex-col  gap-5">
      
      <div className="flex justify-between">
       
      <div className="">
      <h3 className="px-40 font-semibold capitalize underline p-2">Apointment on callender</h3>
        <Calendar
          className=" border w-auto border-blue-300 p-2 border-spacing-8 shadow-lg shadow-blue-200"
          onChange={onChange}
          value={date}
        />
      </div>
      <div>
        <h3 className="px-40 font-semibold capitalize underline p-2">all apointment </h3>
        <table className="table-auto border border-blue-300 border-spacing-8 shadow-lg shadow-blue-200 w-auto gap-6 ">
          <thead className="">
            <tr className="gap-3">
              <th>Patient Name</th>
              <th>Date/TIME</th>
              <th>Doctor</th>
              <th>Cancel apointment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jhon Doe</td>
              <td>5 may, 2022 -- 2:00PM</td>
              <td>Emly</td>
              <button className="border border-solid border-blue-900 text-blue-600 rounded-xl capitalize md:uppercase  bg-blue-100">cancel</button>
            </tr>
            <tr>
              <td>Jhon Doe</td>
              <td>5 may, 2022 -- 2:00PM</td>
              <td>Emly</td>
              <button className="border border-solid border-blue-900 text-blue-600 rounded-xl capitalize md:uppercase bg-blue-100">cancel</button>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
      <div>
        <AddDoctor saveDoctor={saveDoctor} />
      </div>

      <div>
        <h2 className=" font-semibold capitalize underline p-2">All doctors</h2>
      </div>
    </div>
  );
};

export default Admin;

function dispatch(arg0: any): any {
  throw new Error("Function not implemented.");
}

function removeDoctor(doctor: IDoctors): any {
  throw new Error("Function not implemented.");
}
