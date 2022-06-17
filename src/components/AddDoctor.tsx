import * as React from "react"

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
  const test = () =>{
    console.log('test');
  }

  return (
    <form onSubmit={addNewDoctor} className="flex flex-col col-span-2 gap-2">
     <div>
      <input
      className="border border-blue-300"
        type="text"
        id="name"
        placeholder="Name"
        onChange={handleDoctorData}
        required
        />
        </div>
        <div>

      <input
      className="border border-blue-300"
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleDoctorData}
        required
      />
        </div>
        <div>

      <input
      className="border border-blue-300"
        type="text"
        id="phonenumber"
        placeholder="Phone number"
        onChange={handleDoctorData}
      />
        </div>
        <div>

      <input
      className="border border-blue-300"
        type="text"
        id="fax"
        placeholder="fax number"
        onChange={handleDoctorData}
      />
        </div>
        <div>

      <input
      className="border border-blue-300"
        type="text"
        id="location"
        placeholder="location"
        onChange={handleDoctorData}
      /> 
        </div>
        <div>

        <input
        className="border border-blue-300"
        type="text"
        id="depertment"
        placeholder="depertment"
        onChange={handleDoctorData}
      />
        </div>
        <div>
      <textarea className="border border-blue-300"  placeholder="Biography"></textarea>
        </div>
        <div>
      <button className="border border-solid border-blue-400 text-blue-600 rounded-full capitalize md:uppercase bg-blue-100 my-2 " onClick={test}>
        Add Doctor
      </button>
        </div>
    </form>
  )
}