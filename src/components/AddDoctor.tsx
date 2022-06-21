import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addDoctor } from "../store/actionCreators"

type Props = {
  saveDoctor: (doctor: IDoctors | any) => void
}

export const AddDoctor: React.FC<Props> = ({ saveDoctor }) => {
  const [doctor, setDoctor] = React.useState<IDoctors | {}>()

  const handleDoctorData = (e: React.FormEvent<HTMLInputElement>) => {
    setDoctor({
      ...doctor,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewDoctor= (e: React.FormEvent) => {
    e.preventDefault()
    saveDoctor(doctor)
  }

  const articles: readonly IDoctors[] = useSelector(
    (state: DoctorState) => state.doctors,
  
  )

  const dispatch: React.Dispatch<any> = useDispatch()

  const saveDoctors = React.useCallback(
    (article: IDoctors) => dispatch(addDoctor(article)),
    [dispatch]
  )


  return (
    <form onSubmit={addNewDoctor} className="flex flex-col col-span-2 gap-2">
      <h2 className="font-semibold capitalize underline px-20 p-2">add doctor details</h2>
     <div className="flex gap-5">
      <input
      className="border border-blue-300"
        type="text"
        id="name"
        placeholder="Name"
        onChange={handleDoctorData}
        required
        />


      <input
      className="border border-blue-300 "
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleDoctorData}
        required
      />
        </div>
        <div className="flex gap-5">

      <input
      className="border border-blue-300"
        type="text"
        id="phonenumber"
        placeholder="Phone number"
        onChange={handleDoctorData}
      />


      <input
      className="border border-blue-300"
        type="text"
        id="fax"
        placeholder="fax number"
        onChange={handleDoctorData}
      />
        </div>
        <div className="flex gap-5">

      <input
      className="border border-blue-300"
        type="text"
        id="location"
        placeholder="location"
        onChange={handleDoctorData}
      /> 


        <input
        className="border border-blue-300"
        type="text"
        id="depertment"
        placeholder="depertment"
        onChange={handleDoctorData}
      />
        </div>
        <div>
      <textarea className="border border-blue-300 max-w-2xl"  placeholder="Biography"></textarea>
        </div>
        <div>
      <button className="border border-solid border-blue-400 text-blue-600 rounded-full capitalize md:uppercase bg-blue-100 my-2" 
      disabled={doctor === undefined ? true : false}
      >
        Add Doctor
      </button>
        </div>
    </form>
  )
}